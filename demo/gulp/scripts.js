import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
const $ = require('gulp-load-plugins')();

module.exports = options => {
  let wb = (watch, callback) => {
    let webpackOptions = {
      watch: watch,
      module: {
        preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
        loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'traceur-loader'}]
      },
      output: { filename: 'index.js' }
    };

    if(watch) {
      webpackOptions.devtool = 'inline-source-map';
    }

    let webpackChangeHandler = (err, stats) => {
      if(err) {
        options.errorHandler('Webpack')(err);
      }
      $.util.log(stats.toString({
        colors: $.util.colors.supportsColor,
        chunks: false,
        hash: false,
        version: false
      }));
      browserSync.reload();
      if(watch) {
        watch = false;
        callback();
      }
    };

    return gulp.src(options.src + '/app/index.js')
      .pipe(webpack(webpackOptions, null, webpackChangeHandler))
      .pipe(gulp.dest(options.tmp + '/serve/app'));
  }

  gulp.task('scripts', () => wb(false));

  gulp.task('scripts:watch', ['scripts'], (callback) => wb(true, callback));
};
