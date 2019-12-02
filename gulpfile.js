
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var minifyCSS = require('gulp-minify-css');

// gulp.task('default', function() {
//  gulp.src('css/style.css')
//   .pipe(minifyCSS())
//   .pipe(rename('style.min.css'))
//   .pipe(gulp('app/'));


// });

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(minifyCSS('style.css'))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css/"));
});


// const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
// gulp.task('hello', (done) =>{
//   console.log('привет мир');
  
//   done();
// });

// // Static server
// gulp.task('browser-sync', () => {
//   browserSync.init({
//       server: {
//           baseDir: "./"
//       }
//   });
//   gulp.watch("./*.css").on('change', browserSync.reload);
//   gulp.watch("./*.html").on('change', browserSync.reload);
// });


