const gulp =require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', ()=>{
  return gulp.src('sass/*.scss')
  .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});

gulp.task('default', ['scss']);