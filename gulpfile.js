const gulp =require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

const babel = require('gulp-babel');
const concat = require('gulp-concat');

const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', ()=>{
  gulp.src('src/sass/*.scss')
  .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('src/css'));
});

gulp.task('build-js', ()=>{
  gulp.src('src/js/*.js')
  .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('concat.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('src/js'))
})

gulp.task('scss:watch', ()=>{
  gulp.watch('src/sass/*.scss', ['scss'])
});

gulp.task('default', ['scss:watch']);