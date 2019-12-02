
const gulp = require('gulp');
const rename = require("gulp-rename");
const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.css").on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(minifyCSS('style.css'))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css/"));
});