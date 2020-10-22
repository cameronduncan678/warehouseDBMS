const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', (done) => {
  return gulp
    .src('./src/assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('App.css'))
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true,
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/assets/css'));
  done();
});

gulp.task('watch', () => {
  gulp.watch(['./src/assets/sass/**/*.scss', '**/*.js'], gulp.series(['sass']));
});
