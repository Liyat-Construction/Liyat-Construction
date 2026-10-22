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
  assert.doesNotMatch(sitemap, /<lastmod>/);
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
    if (path !== 'styleguide') assert.match(html, /Draft for review/);
  }
  const missing = read('404.html');
  assert.match(missing, /Page not found/);
  assert.match(missing, /href="\/#contact"/);
  assert.doesNotMatch(read('terms-of-service/index.html'), /50%|fourteen \(14\)/);
});
