let mix = require('webpack-mix');

mix.js('src/js/main.js', 'dist/js/main.min.js')
    .sass('src/scss/style.scss', 'dist/css/style.min.css')
    .options({processCssUrls: false});



