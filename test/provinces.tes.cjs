const test = require('node:test');
const assert = require('node:assert/strict');
const { getProvinces } = require('../dist/main.js');

test('getProvinces', (_t) => {
  assert.equal(getProvinces().length, 63);
});
