import { file_id } from '../index.mjs';
import { promises as fs } from 'node:fs';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('file_id.diz (CRLF)', async () => {
  const expects = await fs.readFile('./tests/fixtures/file_id.diz', 'utf-8');
  const actual = file_id.join('\r\n');

  assert.is(actual, expects);
});

test.run();
