'use strict';

import gulp from 'gulp';

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = (options) => {
  gulp.task('partials', () => {
    return gulp.src([
      options.src + '/app/**/*.html',
      options.tmp + '/serve/app/**/*.html'
    ])
      .pipe($.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe($.angularTemplatecache('templateCacheHtml.js', {
        module: 'trucksPlus',
        root: 'app'
      }))
      .pipe(gulp.dest(options.tmp + '/partials/'));
  });

  gulp.task('html', ['inject', 'partials'], () => {
    let partialsInjectFile = gulp.src(options.tmp + '/partials/templateCacheHtml.js', { read: false });
    let partialsInjectOptions = {
      starttag: '<!-- inject:partials -->',
      ignorePath: options.tmp + '/partials',
      addRootSlash: false
    };

    let htmlFilter = $.filter('*.html');
    let jsFilter = $.filter('**/*.js');
    let cssFilter = $.filter('**/*.css');
    let assets;

    return gulp.src(options.tmp + '/serve/*.html')
      .pipe($.inject(partialsInjectFile, partialsInjectOptions))
      .pipe(assets = $.useref.assets())
      .pipe($.rev())
      .pipe(jsFilter)
      .pipe($.replace('http://localhost:8080','https://ninneman-cvdev.appspot.com'))
      .pipe($.ngAnnotate())
      .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', function(e){
        options.errorHandler('Uglify');
        this.emit('end');
      })
      .pipe(jsFilter.restore())
      .pipe(cssFilter)
      .pipe($.replace('../lib/bootstrap-sass-official/assets/fonts/bootstrap', '../fonts'))
      .pipe($.replace('../lib/icomoon-sass/assets/fonts', '../fonts'))
      .pipe($.replace('../lib/material-design-iconic-font/fonts', '../fonts'))
      .pipe($.csso())
      .pipe(cssFilter.restore())
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe($.revReplace())
      .pipe(htmlFilter)
      .pipe($.minifyHtml({
        empty: true,
        spare: true,
        quotes: true,
        conditionals: true
      }))
      .pipe(htmlFilter.restore())
      .pipe(gulp.dest(options.dist + '/'))
      .pipe($.size({ title: options.dist + '/', showFiles: true }));
  });

  // Only applies for fonts from bower dependencies
  // Custom fonts are handled by the "other" task
  gulp.task('fonts', () => {
    return gulp.src($.mainBowerFiles())
      .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe($.flatten())
      .pipe(gulp.dest(options.dist + '/fonts/'));
  });

  gulp.task('other', () => {
    return gulp.src([
      options.src + '/**/*',
      '!' + options.src + '/**/*.{html,css,js,scss}',
      '!' + options.src + '/{app, app/**,lib,lib/**}'
    ])
      .pipe(gulp.dest(options.dist + '/'));
  });

  gulp.task('clean', (done) => $.del([options.dist + '/', options.tmp + '/'], done));

  gulp.task('build', ['html', 'fonts', 'other']);
};
