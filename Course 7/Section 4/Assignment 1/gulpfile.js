const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webp = require('gulp-webp');

function sassCompiler(done) {
  src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./dist/css'));
  done();
}

function javaScript(done) {
  src('./src/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./dist/js'));
  done();
}

function convertImages(done) {
  src('./src/img/*').pipe(webp()).pipe(dest('./dist/img'));
  done();
}

exports.default = series(sassCompiler, javaScript, convertImages);
