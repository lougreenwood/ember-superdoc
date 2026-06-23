import { defineConfig } from 'vite';
import { extensions, ember, classicEmberSupport } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

const isCompat = Boolean(process.env.ENABLE_COMPAT_BUILD);
const isPages = Boolean(process.env.BUILD_PAGES);

export default defineConfig({
  plugins: [
    ...(isCompat ? [classicEmberSupport()] : []),
    ember(),
    babel({
      babelHelpers: 'inline',
      extensions,
    }),
  ],
  base: isPages ? '/ember-superdoc/' : undefined,
  build: {
    rollupOptions: {
      input: isPages ? 'index.html' : { tests: 'tests/index.html' },
    },
  },
});
