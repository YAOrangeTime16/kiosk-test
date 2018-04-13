const gulp =require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', ()=>{
  gulp.src('src/sass/*.scss')
  .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('src/css'));
});

gulp.task('scss:watch', ()=>{
  gulp.watch('src/sass/*.scss', ['scss'])
});

gulp.task('default', ['scss:watch']);