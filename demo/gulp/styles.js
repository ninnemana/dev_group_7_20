import gulp from 'gulp';
import browserSync from 'browser-sync';

let $ = require('gulp-load-plugins')();
let wiredep = require('wiredep').stream;

module.exports = options =>{
  gulp.task('styles', () => {
    const sassOptions = {
      style: 'expanded'
    };

    const injectFiles = gulp.src([
      options.src + '/app/**/*.scss',
      '!' + options.src + '/app/index.scss',
      '!' + options.src + '/app/vendor.scss'
    ], { read: false });

    const injectOptions = {
      transform: filePath => {
        filePath = filePath.replace(options.src + '/app/', '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    const indexFilter = $.filter('index.scss');
    const vendorFilter = $.filter('vendor.scss');

    return gulp.src([
      options.src + '/app/index.scss',
      options.src + '/app/vendor.scss'
    ])
      .pipe(indexFilter)
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(indexFilter.restore())
      .pipe(vendorFilter)
      .pipe(wiredep(options.wiredep))
      .pipe(vendorFilter.restore())
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
      .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + '/serve/app/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
