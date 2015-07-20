import gulp from 'gulp';
import wiredep from 'wiredep';
import karma from 'karma';
import concat from 'concat-stream';
import _ from 'lodash';
let $ = require('gulp-load-plugins')();

module.exports = options => {
  let listFiles = callback => {
    const wiredepOptions = _.extend({}, options.wiredep, {
      dependencies: true,
      devDependencies: true
    });
    const bowerDeps = wiredep(wiredepOptions);

    const specFiles = [
      options.src + '/**/*.spec.js',
      options.src + '/**/*.mock.js'
    ];

    const htmlFiles = [
      options.src + '/**/*.html'
    ];

    const srcFiles = [
      options.tmp + '/serve/app/index.js'
    ].concat(specFiles.map(function(file) {
      return '!' + file;
    }));


    gulp.src(srcFiles)
      .pipe(concat(function(files) {
        callback(bowerDeps.js
          .concat(_.pluck(files, 'path'))
          .concat(htmlFiles)
          .concat(specFiles));
      }));
  }

  let runTests =(singleRun, done) => {
    listFiles(function(files) {
      karma.server.start({
        configFile: __dirname + '/../karma.conf.js',
        files: files,
        singleRun: singleRun,
        autoWatch: !singleRun
      }, done);
    });
  }

  gulp.task('test', ['scripts'], done => runTests(true, done));
  gulp.task('test:auto', ['watch'], done => runTests(false, done));
};
