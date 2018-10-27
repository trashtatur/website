'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
var browserify = require('browserify');
var path = require('path');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default',function () {
    gulp.run('sass');
    gulp.run('browserify')
});

gulp.task('sass', function () {
    gulp.src(__dirname+'/src/**/frontend/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(function (file) {
            return file.base.replace('/src','/build')
        }));
});


gulp.task('browserify', function () {

    return gulp.src('src/**/frontend/js/*.js', {read: false})

    // transform file objects using gulp-tap plugin
        .pipe(tap(function (file) {
            // replace file contents with browserify's bundle stream
            let name = path.parse(path.basename(file.path)).name;
            file.contents = browserify(file.path, {debug: true,  standalone: name}).bundle();
        }))
        // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
        .pipe(buffer())
        // load and init sourcemaps
        .pipe(sourcemaps.init({loadMaps: true}))
        // write sourcemaps
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build'));

});