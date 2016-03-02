var gulp       = require('gulp'),
    browserify = require('gulp-browserify');
    var babelify = require('babelify');
var uglify = require('gulp-uglify');
//var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('build-js', function () {

    browserify({
        entries: './views/app/main.jsx',
        extensions: ['jsx'],
        debug: true
    })
        .transform("babelify",
        {
            presets: ['react', 'es2015']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename('appTarget.js'))
        .pipe(gulp.dest('./public/'));

});

gulp.task('watch-js', function() {
    gulp.watch(['./views/app/**/*.js', './views/app/*.js'], ['build-js']);
});

gulp.task('default', ['build-js','watch-js']);