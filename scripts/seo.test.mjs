import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const output = new URL('../out/', import.meta.url);
const read = (path) => readFileSync(new URL(path, output), 'utf8');
const sitemap = read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
const pages = urls.map((url) => ({
  url,
  html: read(
    `${url.pathname.replace(/^\//, '')}${url.pathname.endsWith('/') ? '' : '/'}index.html`
  ),
}));
const content = (html, name) => {
  const tag = [...html.matchAll(/<meta\s[^>]+>/g)]
    .map((match) => match[0])
    .find((value) => value.includes(`name="${name}"`) || value.includes(`property="${name}"`));
  return tag?.match(/content="([^"]*)"/)?.[1];
};

test('sitemap has unique public routes and excludes draft/legal/system specimens', () => {
  // Home, About, Projects, Equipment and the six service pages at minimum (D-60, D-74)
  assert.ok(urls.length >= 10);
  assert.equal(new Set(urls.map(String)).size, urls.length);
  for (const url of urls)
    assert.doesNotMatch(url.pathname, /styleguide|privacy-policy|terms-of-service|404/);
  // One honest date for all pages, changed by hand only when content changes
  const dates = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]);
  assert.equal(dates.length, urls.length);
  for (const date of dates) assert.match(date, /^\d{4}-\d{2}-\d{2}/);
});

test('Home and service titles and descriptions say what Liyat does and where', () => {
  for (const { url, html } of pages) {
    const description = content(html, 'description');
    assert.ok(description.length <= 165, `${url.pathname}: description is ${description.length}`);
    if (url.pathname === '/') {
      assert.match(html.match(/<title>([^<]+)<\/title>/)[1], /^Liyat Construction \| Water-Well/);
      assert.match(description, /Addis Ababa, Ethiopia/);
    }
    if (url.pathname.startsWith('/services/')) {
      assert.match(html.match(/<title>([^<]+)<\/title>/)[1], / in Ethiopia \| Liyat Construction$/);
      assert.match(description, /Ethiopia/);
      assert.match(description, /Addis Ababa/);
    }
  }
});

test('the three project pages are in the sitemap with their own title, description and breadcrumb', () => {
  const projectPages = pages.filter(
    ({ url }) => url.pathname.startsWith('/projects/') && url.pathname !== '/projects/'
  );
  assert.deepEqual(projectPages.map(({ url }) => url.pathname.replace(/\/$/, '')).sort(), [
    '/projects/british-embassy-pump-installation',
    '/projects/chaka-house-project',
    '/projects/ethiopian-airlines-pumping-test',
  ]);
  for (const { url, html } of projectPages) {
    assert.match(html.match(/<title>([^<]+)<\/title>/)[1], / \| Liyat Construction$/, url.pathname);
    const schemas = [
      ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
    ].flatMap((match) => JSON.parse(match[1]));
    const names = schemas
      .find((schema) => schema['@type'] === 'BreadcrumbList')
      .itemListElement.map((item) => item.name);
    assert.deepEqual([names[0], names[1]], ['Home', 'Projects'], url.pathname);
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, url.pathname);
  }
});

test('WebSite data names the site "Liyat Construction" with the PLC name as alternate', () => {
  const home = pages.find(({ url }) => url.pathname === '/').html;
  const schemas = [
    ...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].flatMap((match) => JSON.parse(match[1]));
  const site = schemas.find((schema) => schema['@type'] === 'WebSite');
  assert.equal(site.name, 'Liyat Construction');
  assert.deepEqual(site.alternateName, ['Liyat Construction PLC']);
  const business = schemas.find((schema) => schema['@type'] === 'GeneralContractor');
  assert.equal(business.legalName, 'Liyat Construction PLC');
});

test('every public route has its own canonical, title, description and social metadata', () => {
  const titles = new Set();
  for (const { url, html } of pages) {
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(canonical, url.href, url.pathname);
    assert.equal(content(html, 'og:url'), url.href, url.pathname);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && title.includes('Liyat Construction'), url.pathname);
    assert.ok(!titles.has(title), `duplicate title: ${title}`);
    titles.add(title);
    assert.ok(content(html, 'description'), url.pathname);
    assert.ok(content(html, 'og:title'), url.pathname);
    assert.ok(content(html, 'og:description'), url.pathname);
    assert.equal(content(html, 'twitter:card'), 'summary_large_image', url.pathname);
    const image = new URL(content(html, 'og:image'));
    assert.ok(existsSync(fileURLToPath(new URL(`.${image.pathname}`, output))), image.pathname);
    assert.doesNotMatch(html, /googletagmanager\.com/);
  }
});

test('JSON-LD is parseable, includes the business and inner-page breadcrumbs', () => {
  for (const { url, html } of pages) {
    const schemas = [
      ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
    ].flatMap((match) => JSON.parse(match[1]));
    assert.ok(
      schemas.some((schema) => schema['@type'] === 'GeneralContractor'),
      url.pathname
    );
    if (url.pathname === '/') continue;
    const breadcrumb = schemas.find((schema) => schema['@type'] === 'BreadcrumbList');
    assert.ok(breadcrumb, url.pathname);
    for (const [index, item] of breadcrumb.itemListElement.entries()) {
      assert.equal(item.position, index + 1);
      assert.ok(item.name);
      if (item.item) assert.equal(new URL(item.item).origin, url.origin);
    }
  }
});

test('legal drafts and styleguide are noindex and 404 supplies real recovery links', () => {
  for (const path of ['privacy-policy', 'terms-of-service', 'styleguide']) {
    const html = read(`${path}/index.html`);
    assert.match(content(html, 'robots'), /noindex/);
    if (path !== 'styleguide') {
      assert.doesNotMatch(html, /Draft for review|Draft updated:/);
      assert.match(html, /On this page/);
      assert.match(html, /mailto:liyatconstruction@gmail\.com/);
      const anchors = [...html.matchAll(/href="#([a-z][a-z-]*)"/g)].map((match) => match[1]);
      assert.ok(new Set(anchors).size >= 7, `${path}: missing legal navigation`);
      for (const anchor of anchors) assert.ok(html.includes(`id="${anchor}"`), anchor);
    }
  }
  const missing = read('404.html');
  assert.match(missing, /Page not found/);
  assert.match(missing, /href="\/#contact"/);
  assert.doesNotMatch(read('terms-of-service/index.html'), /50%|fourteen \(14\)/);
});
