'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const hb = require('gulp-hb');
const rename = require('gulp-rename');
const path = require('path');
const logger = require('gulp-logger');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('src/**/frontend/css/*.scss')
        .pipe(sass().on('error', sass.logError))

        .pipe(gulp.dest(function (file) {
            return file.base.replace('/src', '/build')
        }))
        .pipe(logger({
            before: 'Starting SASS Compilation',
            after: 'All SASS files compiled',
        }));
});

gulp.task('link:CSS',function () {
    return gulp.src(__dirname + '/src/**/frontend/css/*.css')
        .pipe(gulp.symlink(function (file) {
            return file.base.replace('/src', '/build')
        }))
        .pipe(logger({
            before:'Linking CSS files',
            after: 'All CSS linked'
        }))
});

gulp.task('link:NPM',function () {
    return gulp.src(__dirname + '/src/*/*/node_modules')
        .pipe(gulp.symlink(function (folder) {
            return folder.base.replace('/src', '/build')
        }))
        .pipe(logger({
            before:'Linking NPM Folders',
            after: 'All Folders linked'
        }))
});

gulp.task('browserify:copy',function () {
    return gulp.src('src/**/frontend/js/*.js')
        .pipe(gulp.dest(function (file) {
            return file.base.replace('/src', '/build')
        }))
        .pipe(logger({
            before:'Copying JS files for bundling',
            after: 'All JS files bundled'
        }))
});

gulp.task('copy:handlebars',function () {
    return gulp.src('src/**/frontend/**/*.hbs')
        .pipe(gulp.symlink(function (file) {
            return file.base.replace('/src', '/build')
        }))
        .pipe(logger({
            before:'Copying Handlebars files',
            after: 'All Handlebars files copied'
        }))
});

gulp.task('precompile:handlebars',function () {
    const hbstream = hb()
        .partials('./src/core_modules/module-webserver/frontend/partials/*/*.hbs')
        .partials('./src/core_modules/module-webserver/frontend/partials/*.hbs')
        .partials('./src/ven_modules/module-fight/frontend/partials/*.hbs')
        .helpers(require('./build/core_modules/module-webserver/frontend/helpers/helpers').helpers())
        .data({
            "title": "TEST"
        });

    return gulp.src('src/*/*/frontend/views/*.hbs')
        .pipe(hbstream)
        .pipe(rename({
            extname:".hbs.html",
            dirname:""
        }))
        .pipe(gulp.dest('TEST'))
});

gulp.task('browserify:bundle', function () {

    return gulp.src('build/**/frontend/js/*.js', {read: false})

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

gulp.task('browserify',gulp.series('browserify:copy','browserify:bundle'));

gulp.task('default',
    gulp.series(
        'link:NPM',
        'sass',
        'copy:handlebars',
        'link:CSS',
        'browserify',
        'precompile:handlebars'
    ),
    function () {
    }
);