const TerserPlugin = require('next/dist/compiled/terser-webpack-plugin');

module.exports = {
  webpack: (config, options) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    };

    // Only disable function name mangling on the development enviroment
    if (process.env.NODE_ENV === 'development') {
        const terser = config.optimization.minimizer.find((plugin) => plugin instanceof TerserPlugin);
        if (terser) {
          terser.options.terserOptions = {
            ...terser.options.terserOptions,
            keep_classnames: true,
            keep_fnames: true,
          };
        }
    }
    return config;
  }
}