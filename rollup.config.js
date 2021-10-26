/**
 * https://rollupjs.org/guide/en/#config-intellisense
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  }
};