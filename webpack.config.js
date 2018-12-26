const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        game: './src/game/game.js'
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 5000
                    }
                }
            ]
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use : {
                  loader: 'babel-loader'
              }
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'game.html',
            template: './src/game/game.html',
            chunks: ['game']
        })
    ]
}
