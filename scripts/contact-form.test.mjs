import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CONTACT_PAGE } from '../src/data/contact.ts';
import {
  createContactFormSchema,
  isContactFormEnabled,
  submitContactForm,
} from '../src/lib/contact-form.ts';

const configuration = {
  provider: 'web3forms',
  formKey: 'test-public-key',
  subjects: ['Project inquiry'],
};
const schema = createContactFormSchema(CONTACT_PAGE.form.validation, configuration.subjects);
const values = {
  name: 'Test Person',
  email: 'test@example.test',
  phone: '+251 93 001 4711',
  subject: 'Project inquiry',
  message: 'Test inquiry, not a real submission.',
};

test('accepts international names and trimmed values', () => {
  const result = schema.parse({ ...values, name: '  ቢንያም ተስፋዬ  ', email: ' test@example.test ' });
  assert.equal(result.name, 'ቢንያም ተስፋዬ');
  assert.equal(result.email, values.email);
  assert.equal(result.phone, values.phone);
  // Every field is required, phone included (D-95)
  assert.equal(schema.safeParse({ ...values, phone: '' }).success, false);
});

test('does not retain the removed organization field', () => {
  const result = schema.parse({ ...values, organization: 'Not collected' });
  assert.equal('organization' in result, false);
});

test('accepts published phone formats and rejects non-numbers', () => {
  for (const phone of ['+251 93 001 4711', '0930014711', '+251-90-680-8182']) {
    assert.equal(schema.safeParse({ ...values, phone }).success, true, phone);
  }
  for (const phone of [
    '-------',
    '() () ()',
    '+123---',
    '1234567890123456',
    'phone123',
    '123456 ext',
  ]) {
    assert.equal(schema.safeParse({ ...values, phone }).success, false, phone);
  }
});

test('rejects invalid fields and subjects outside the configured list', () => {
  for (const change of [
    { name: ' ' },
    { email: 'not-an-email' },
    { subject: '' },
    { subject: 'Injected subject' },
    { message: 'short' },
    { message: 'x'.repeat(2001) },
  ])
    assert.equal(schema.safeParse({ ...values, ...change }).success, false);
});

test('requires both a provider and a non-empty public key', () => {
  assert.equal(isContactFormEnabled(configuration), true);
  assert.equal(isContactFormEnabled({ ...configuration, formKey: ' ' }), false);
  assert.equal(isContactFormEnabled({ ...configuration, provider: 'none' }), false);
});

test('sends Web3Forms payload only through a mocked transport', async (context) => {
  const fetch = context.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    const body = JSON.parse(options.body);
    assert.equal(body.access_key, configuration.formKey);
    assert.equal(body.email, values.email);
    assert.equal('organization' in body, false);
    assert.equal(body.botcheck, false);
    assert.equal(body.subject, 'Project inquiry — Test sender website');
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ success: true });
  });
  await submitContactForm(values, configuration, 'Test sender');
  assert.equal(fetch.mock.callCount(), 1);
});

test('rejects HTTP errors, malformed acknowledgements and network failures', async (context) => {
  for (const response of [
    Response.json({ success: false }),
    Response.json({}),
    Response.json('unexpected'),
    Response.json({ success: true }, { status: 500 }),
    new Response('invalid json'),
  ]) {
    const transport = context.mock.method(globalThis, 'fetch', async () => response);
    await assert.rejects(submitContactForm(values, configuration, 'Test sender'));
    transport.mock.restore();
  }
  context.mock.method(globalThis, 'fetch', async () => {
    throw new TypeError('Offline');
  });
  await assert.rejects(submitContactForm(values, configuration, 'Test sender'));
});

test('does not send an unconfigured form', async (context) => {
  const fetch = context.mock.method(globalThis, 'fetch', async () => {
    throw new Error('Must not send');
  });
  await assert.rejects(submitContactForm(values, { ...configuration, formKey: '' }, 'Test sender'));
  assert.equal(fetch.mock.callCount(), 0);
});
