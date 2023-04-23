const { src, dest, parallel, series, watch } = require('gulp');
const kit = require('gulp-kit-2');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webp = require('gulp-webp');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const paths = {
  html: './src/html/**/*.kit',
  sass: './src/sass/**/*.scss',
  js: './src/js/**/*.js',
  img: './src/img/*',
  dist: './dist',
  sassDest: './dist/css',
  jsDest: './dist/js',
  imgDest: './dist/img',
};

function handleKits(done) {
  src(paths.html).pipe(kit()).pipe(dest('./'));
  done();
}

function sassCompiler(done) {
  src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.sassDest));
  done();
}

function javaScript(done) {
  src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.jsDest));
  done();
}

function convertImages(done) {
  src(paths.img).pipe(webp()).pipe(dest(paths.imgDest));
  done();
}

function cleanDist(done) {
  src(paths.dist, { read: false }).pipe(clean());
}

function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  done();
}

function watchForChanges(done) {
  watch('./*.html').on('change', reload);
  watch([paths.html, paths.sass, paths.js], parallel(handleKits, sassCompiler, javaScript)).on('change', reload);
  watch(paths.img, convertImages).on('change', reload);
  done();
}

const mainFunctions = parallel(handleKits, sassCompiler, javaScript, convertImages);
exports.cleanDist = cleanDist;
exports.default = series(mainFunctions, startBrowserSync, watchForChanges);
