#!/usr/bin/env node
import bcrypt from 'bcryptjs';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout, argv } from 'node:process';

const COST = 12;

async function main() {
  let password = argv[2];

  if (!password) {
    const rl = createInterface({ input: stdin, output: stdout });
    password = (await rl.question('Password to hash: ')).trim();
    rl.close();
  }

  if (!password || password.length < 8) {
    console.error('Password must be at least 8 characters.');
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, COST);
  console.log('\n--- bcrypt hash (cost ' + COST + ') ---');
  console.log(hash);
  // Vite's env loader interpolates $ — escape every $ with a backslash.
  const escaped = hash.replace(/\$/g, '\\$');
  console.log('\nPaste this into .env (every $ is pre-escaped for Vite):');
  console.log('ADMIN_PASSWORD_HASH=' + escaped);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
