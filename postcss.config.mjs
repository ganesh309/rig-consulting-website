/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'tailwindcss': {},
    'autoprefixer': {
      flexbox: 'no-2009',
      grid: 'autoplace',
    },
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': false
      }
    }
  },
};

export default config;
