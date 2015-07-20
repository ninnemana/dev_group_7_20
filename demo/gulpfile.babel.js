'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import wrench from 'wrench';

const options = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: (title) => {
    return function (err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'src/lib',
    exclude: [/bootstrap\.css/, /material-design-iconic-font\.css/]
  }
};

wrench.readdirSyncRecursive('./gulp').filter((file) => {
  return (/\.(js|coffee)$/i).test(file);
}).map((file) => {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], () => gulp.start('build'));
