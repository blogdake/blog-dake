
const {src, dest, watch} = require('gulp');
const rename = require("gulp-rename");
// const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./*.*").on('change', browserSync.reload);
  // watch("./css/*.css", minifyCSS);
  watch("./js/*.js").on('change', browserSync.reload);;

};

function serveSass() {
  return src('./sass/**/*.sass', './sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
};

// function minifyCSS() {
//   src(['./css/*.css', '!./css/*.min.css'])
//     .pipe(minifyCSS())
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest("./css"));
// };
exports.serve = bs;