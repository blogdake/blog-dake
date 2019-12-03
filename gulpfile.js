
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
  gulp.watch("./*.*").on('change', browserSync.reload);
  
  gulp.watch("./css/*.css", minifyCSS);

});

gulp.task('minify-css', () => {
  gulp.src(['./css/*.css', '!./css/*.min.css'])
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest("./css"));
});