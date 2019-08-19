const VueloaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");
const path = require("path");
const PostcssEnv = require("postcss-preset-env");

module.exports = {
  devtool: 'none',
  resolve:{
    modules:["node_modules","assets/generated"]
  },
  entry: {
    appp: "./src/app.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    port:8100,
    open:true,
    hot:true,
    // proxy:{
    //   "/api":"http://localhost:8081"
    // }
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:"/node_modules/",
        loader:"babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [new PostcssEnv()]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "img/[hash:3].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "media/[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "font/[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test:/\.js|vue$/,
        exclude:"/node_modules/",
        enforce:"pre",
        options:{
          fomatter:require("eslint-friendly-formatter")
        },
        loader:"eslint-loader"
      }
    ],
  },
  plugins: [
    new VueloaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "使用HTML插件自动生成的页面"
    }),
    new StyleLintPlugin({
      files: [
        "src/**/*.{vue,css,scss,sass}",
        "!src/assets/generated/"
      ]
    }),
    new SpritesmithPlugin({
      src:{
        cwd:path.resolve(__dirname,"src/assets/sprites"),
        glob: "*.png"
      },
      target:{
        image:path.resolve(__dirname,"src/assets/generated/sprite.png"),
        css:path.resolve(__dirname,"src/assets/generated/sprite.scss")
      },
      apiOptions:{
        cssImageRef:"~sprite.png"
      }
    })
  ]
}