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
        rules: [
          { test: /\.(ts|tsx?)$/, use: 'ts-loader', exclude: /node_modules/ },
          {
            test: /\.(js|mjs)$/,
            include: [/node_modules\/react-tag-autocomplete/, /node_modules\/tabulator-tables/],
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-logical-assignment-operators'
                ]
              }
            }
          }
        ]
      }
    },
    html: {
      template: 'demo/src/template.html'
    }
  },
  devServer: {
    disableHostCheck: true
  }
};
