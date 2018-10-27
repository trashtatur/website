'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src(__dirname+'/src/**/frontend/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(function (file) {
            return file.base.replace('/src','/build')
        }));
});
