var gulp = require('gulp');
var concat = require('gulp-concat');
var terser = require('gulp-terser');
var uglifycss = require('gulp-uglifycss');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer      = require('vinyl-buffer');
var runSequence = require('run-sequence');
var source      = require('vinyl-source-stream');
var del = require('del');

gulp.task('clean:styles', function() {
  return del(['static/css/']);
});

gulp.task('clean:js', function() {
    return del(['static/js/']);
  });

gulp.task('styles', function() {
    return gulp.src([
        'src/css/app.css',
        'src/css/Footer-Dark.css',
        'src/css/isolde.css',
        'src/css/main.css',
        'src/css/Navigation-Clean.css',
        'src/css/sortable.css',
        'src/css/styles.css',
        ])
        .pipe(concat('app.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('isolde', function(){
    return browserify({entries: 'src/js/isolde.js'})
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .pipe(source('isolde.js'))
    .pipe(buffer())
    .pipe(gulp.dest('static/js/'));
});

gulp.task('js', function() {
    return gulp.src(['static/js/isolde.js','src/js/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('static/js/'));
});

gulp.task('post-js',function(){
    return del(['static/js/isolde.js']);
});

gulp.task('watch', function(){
    runSequence(
        'clean:styles','styles','clean:js','isolde','js','post-js'
    )
});

gulp.task('default', ['watch']);