'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const path = require('path');
const logger = require('gulp-logger');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src(__dirname + '/src/**/frontend/css/*.scss')
        .pipe(sass().on('error', sass.logError))

        .pipe(gulp.dest(function (file) {
            return file.base.replace('/src', '/build')
        }))
        .pipe(logger({
            before: 'Starting SASS Compilation',
            after: 'All SASS files compiled',
        }));
});


gulp.task('browserify', function () {

    return gulp.src('src/**/frontend/js/*.js', {read: false})

    // transform file objects using gulp-tap plugin
        .pipe(tap(function (file) {
            // replace file contents with browserify's bundle stream
            let name = path.parse(path.basename(file.path)).name;
            file.contents = browserify(file.path, {debug: true, standalone: name}).bundle();
        }))
        // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
        .pipe(buffer())
        // load and init sourcemaps
        .pipe(sourcemaps.init({loadMaps: true}))
        // write sourcemaps
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build'))
        .pipe(logger({
            before: 'Starting bundling process',
            after: 'All files bundled',
        }));
});


gulp.task('default',
    gulp.series(
        'sass',
        'browserify'
    ),
    function () {
    }
);