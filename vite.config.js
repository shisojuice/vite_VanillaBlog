import { defineConfig } from 'vite';
import { resolve, relative } from 'path';
import { globSync } from 'glob';

const posts = globSync('posts/*.html')
  .reduce((acc, curr) => {
    const key = relative('posts', curr).replace('.html', '')
    acc[key] = curr
    return acc
  }, {})
posts['main'] = resolve(__dirname, 'index.html');

export default defineConfig({
  base: "/vite_VanillaBlog/",
  build: {
    rollupOptions: {
      input: posts
    },
  },
});
