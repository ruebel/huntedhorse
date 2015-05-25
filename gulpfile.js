////////////////////////////////////////////
// PLUGINS
var gulp = require('gulp');
var cache = require('gulp-cache');
var child = require('child_process');
var concat = require('gulp-concat');
var fs = require('fs');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

////////////////////////////////////////////
// PATHS
var src = 'src/';
var dest = 'build/';

////////////////////////////////////////////
// TASKS

/**
 *  Bundle and minify javascript
 */
gulp.task('scripts', function(){
   return gulp.src(src + 'js/*.js')        // grab all of our js files
       .pipe(concat('main.js'))            // concatenate to main.js
       .pipe(rename({suffix: '.min'}))     // rename to .min
       .pipe(uglify())                     // minify
       .pipe(gulp.dest(dest + 'js'));      // write to build folder
});

/**
 *  Bundle and minify style
 */
gulp.task('less', function() {
    return gulp.src(src + 'less/hh.less')
        .pipe(rename({suffix: '.min'}))
        .pipe(less({compress: true}))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(gulp.dest(dest + 'css'));
});

/**
 *  Optimize and copy images
 */
gulp.task('images', function(){
   return gulp.src(src + 'img/*')
       .pipe(cache(imagemin({
           optimizationLevel: 5,
           progressive: true,
           interlaced: true})))
       .pipe(gulp.dest(dest + 'img'));
});

/**
 *  Copy source files
 */
gulp.task('copy', function(){
   gulp.src(src + 'index.html')
       .pipe(gulp.dest('build'));
    gulp.src(src + 'humans.txt')
        .pipe(gulp.dest('build'));
});

/**
 *  Server locally
 */
gulp.task('server', function() {
    var server = child.spawn('node', ['server.js']);
    var log = fs.createWriteStream('server.log', {flags: 'a'});
    server.stdout.pipe(log);
    server.stderr.pipe(log);
});

/**
 *  Watch for code changes
 */
gulp.task('watch', function(){
   gulp.watch(src + 'js/*.js', ['scripts']);
   gulp.watch(src + 'less/*.less', ['less']);
   gulp.watch(src + 'images/**/*.*', ['images']);
   gulp.watch(src + '/**/*.html', ['copy']);
});

/**
 *  Default build, watch, and server task
 */
gulp.task('default', ['scripts', 'less', 'images', 'copy', 'watch', 'server']);