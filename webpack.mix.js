const mix = require('webpack-mix');
const webpack = require("webpack");

// const mix = require('laravel-mix');

mix.webpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  });


mix.js('src/js/main.js', 'dist/js/main.min.js')
    .sass('src/scss/style.scss', 'dist/css/style.min.css')
    .options({processCssUrls: false});

    mix.copyDirectory(
        "node_modules/slick-carousel/slick/fonts",
        "assets/dist/css/fonts"
      );

     