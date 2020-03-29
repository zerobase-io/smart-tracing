const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

// Environment variables should be prefixed with the following prefix
// Example: RUNTIME_API_HOST will inject API_HOST into the runtime config
const PREFIX = 'RUNTIME_';
const environmentVarsToJSON = () => {
  const config = {};

  Object.entries(process.env).forEach(([name, value]) => {
    if (name.startsWith(PREFIX)) {
      config[name.slice(PREFIX.length)] = value;
    }
  });

  return JSON.stringify(config);
};

module.exports = {
  // webpack will take the files from ./src/index
  entry: './src/index',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    // publicPath: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/img/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: '{{ RUNTIME_CONFIG }}',
        replacement: environmentVarsToJSON(),
      },
    ]),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
