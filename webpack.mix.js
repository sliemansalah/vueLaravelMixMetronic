// const webpack = require("webpack");

const mix = require('laravel-mix');
mix.js('resources/js/admin/main.js', 'public/js/admin');

// module.exports = {
//   runtimeCompiler: true,
//   outputDir: 'public',
//   publicPath: 'public',
//   lintOnSave: false,
//   chainWebpack: config => {
//     config.optimization.delete('splitChunks')
//   },
//   configureWebpack: {
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//         Popper: ['popper.js', 'default']
//       })
//     ]
//   },
//   pages: {
//     admin: {
//       entry: 'resources/js/admin/main.js',
//       template: 'resources/views/admin/index.blade.php',
//       filename: 'admin.html',
//     }
//   }
// }
