import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { readdirSync, statSync } from 'fs';

function findVcConfigs(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findVcConfigs(fullPath));
    } else if (entry.name === '.vc-config.json') {
      results.push(fullPath);
    }
  }
  return results;
}

const functionsDir = '.vercel/output/functions';
const configs = findVcConfigs(functionsDir);

for (const configPath of configs) {
  const content = readFileSync(configPath, 'utf8');
  const patched = content.replace(/"nodejs18\.x"/g, '"nodejs20.x"');
  if (content !== patched) {
    writeFileSync(configPath, patched);
    console.log(`[patch] ${configPath}: nodejs18.x → nodejs20.x`);
  }
}
