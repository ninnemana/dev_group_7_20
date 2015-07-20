import gulp from 'gulp';
import browserSync from 'browser-sync';

let isOnlyChange = event => event.type === 'changed';

module.exports = options => {
  gulp.task('watch', ['scripts:watch', 'inject'], () => {

    gulp.watch([options.src + '/*.html', 'bower.json'], ['inject']);

    gulp.watch([
      options.src + '/app/**/*.css',
      options.src + '/app/**/*.scss'
    ], event => {
      if(isOnlyChange(event)) {
        gulp.start('styles');
      } else {
        gulp.start('inject');
      }
    });


    gulp.watch(options.src + '/app/**/*.html', event => browserSync.reload(event.path));
  });
};
