import test from 'node:test';
import assert from 'node:assert/strict';
import { getProvinces } from '../dist/main.js';

test('getProvinces', (_t) => {
  assert.equal(getProvinces().length, 63);
});
