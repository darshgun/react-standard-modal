module.exports = {
  input: {
    index: 'src/index.js',
  },
  output: {
    format: ['cjs', 'umd', 'umd-min', 'esm'],
    moduleName: 'ReactStandardModal',
    extractCSS: false,
  },
  globals: {
    react: 'React',
  },
  plugins: {
    postcss: {
      modules: true,
    },
  },
  extendConfig(config, { format }) {
    if (format.startsWith('umd')) {
      config.output.fileName = 'umd/react-standard-modal[min].js';
    }
    if (format === 'esm') {
      config.output.fileName = '[name].module.js';
    }
    return config;
  },
  env: {
    NODE_ENV: 'production',
  },
};
