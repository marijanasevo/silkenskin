import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import postcssExtend from 'postcss-extend';
import postcssNested from 'postcss-nested';
import postcss from 'postcss';

const logPlugin = postcss.plugin('log-plugin', () => (root) => {
  console.log('PostCSS is being applied to:', root.source.input.file);
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), svgr() ],
  css: {
    postcss: {
      plugins: [ postcssExtend(), postcssNested(), logPlugin() ]
    }
  }
})

