import gulp from 'gulp';
const $ = require('gulp-load-plugins')();
const wiredep = require('wiredep').stream;

module.exports = (options) => {
  gulp.task('inject', ['scripts', 'styles'], () => {
    let injectStyles = gulp.src([
      options.tmp + '/serve/app/**/*.css',
      '!' + options.tmp + '/serve/app/vendor.css'
    ], { read: false });

    let injectScripts = gulp.src([
      options.tmp + '/serve/app/**/*.js',
      '!' + options.src + '/app/**/*.spec.js',
      '!' + options.src + '/app/**/*.mock.js'
    ], { read: false });

    let injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
