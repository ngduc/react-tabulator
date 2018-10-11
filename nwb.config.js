module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    extra: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      module: {
        rules: [{ test: /\.(ts|tsx?)$/, loader: 'awesome-typescript-loader' }]
      }
    }
  }
};
