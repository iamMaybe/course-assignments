const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webp = require('gulp-webp');

const paths = {
  sass: './src/sass/**/*.scss',
  js: './src/js/**/*.js',
  img: './src/img/*',
  sassDest: './dist/css',
  jsDest: './dist/js',
  imgDest: './dist/img',
};

function sassCompiler(done) {
  src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.sassDest));
  done();
}

function javaScript(done) {
  src(paths.js)
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.jsDest));
  done();
}

function convertImages(done) {
  src(paths.img).pipe(webp()).pipe(dest(paths.imgDest));
  done();
}

exports.default = series(sassCompiler, javaScript, convertImages);
