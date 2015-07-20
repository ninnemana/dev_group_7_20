'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
const $ = require('gulp-load-plugins')();

module.exports = (options) => {
  // Downloads the selenium webdriver
  gulp.task('webdriver-update', $.protractor.webdriver_update);

  gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

  let runProtractor = (done) => {

    gulp.src(options.e2e + '/**/*.js')
      .pipe($.protractor.protractor({
        configFile: 'protractor.conf.js'
      }))
      .on('error',  (err) => {
          throw err;
      })
      .on('end', () => {
        // Close browser sync server
        browserSync.exit();
        done();
      });
  }

  gulp.task('protractor', ['protractor:src']);
  gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
  gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
};
