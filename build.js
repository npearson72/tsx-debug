// eslint-disable-next-line import/no-extraneous-dependencies
require('esbuild')
  .build({
    platform: 'node',
    logLevel: 'error',
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    keepNames: true,
    sourcemap: 'linked',
    sourcesContent: false,
    outfile: 'dist/index.js'
  })
  .catch(() => process.exit(1));
