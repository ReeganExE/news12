const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { env } = process;
const DEV = env.NODE_ENV === 'development';

const assets = [
  {
    loader: 'file-loader',
    options: {
      hash: 'sha512',
      digest: 'hex',
      name: 'assets/[hash].[ext]'
    }
  }
];

const cssLoader = () => {
  const css = {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: 'ninhdeptrai.com-[hash:base64:8]'
      // minimize: DEV ? false : { discardComments: { removeAll: true } }
    }
  };

  return ['style-loader', css];
};

const options = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: DEV ? '[name].js' : '[name]-[chunkhash:4].js',
    publicPath: env.PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: cssLoader()
      }
    ].concat(fontsLoaders())
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
      'process.env.PUBLIC_PATH': JSON.stringify(env.PUBLIC_PATH)
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  devtool: DEV ? 'cheap-module-eval-source-map' : undefined,
  optimization: optimization(),
  devServer: {
    hot: true
  }
};

function fontsLoaders() {
  return [
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      use: 'null-loader'
    },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      use: assets
    },
    {
      test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
      use: 'null-loader'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: 'null-loader'
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
      use: assets
    }
  ];
}

function optimization() {
  if (DEV) {
    return;
  }

  return {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          },
          safari10: true
        }
      })
    ]
  };
}

module.exports = options;
