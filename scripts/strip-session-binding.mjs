/**
 * Postbuild script — removes the SESSION KV binding from the generated
 * dist/client/wrangler.json. The site has no login/session functionality
 * so this binding is unused, and Cloudflare errors if it tries to
 * auto-provision a namespace that already exists.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const path = resolve('dist/client/wrangler.json');

try {
  const config = JSON.parse(readFileSync(path, 'utf-8'));

  // Remove SESSION from kv_namespaces
  if (config.kv_namespaces) {
    config.kv_namespaces = config.kv_namespaces.filter(
      (ns) => ns.binding !== 'SESSION'
    );
  }

  // Remove SESSION from previews.kv_namespaces
  if (config.previews?.kv_namespaces) {
    config.previews.kv_namespaces = config.previews.kv_namespaces.filter(
      (ns) => ns.binding !== 'SESSION'
    );
  }

  writeFileSync(path, JSON.stringify(config, null, 2));
  console.log('✓ Stripped SESSION KV binding from dist/client/wrangler.json');
} catch (err) {
  console.error('Failed to strip SESSION binding:', err.message);
  process.exit(1);
}
