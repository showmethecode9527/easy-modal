var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename');

var prefixerOptions = {
    browser: ['last 2 version', 'Android >= 4.0']
};

gulp.task('sass', function () {
    gulp.src('src/styles/scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(rename({suffix: '.min'}))
            .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/styles/css'));
});

gulp.task('default', ['sass']);