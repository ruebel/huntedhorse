////////////////////////////////////////////
// PLUGINS
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  lazy: true
});
var browserSync = require('browser-sync').create();
var child = require('child_process');
var fs = require('fs');
var imageminWebp = require('imagemin-webp');

////////////////////////////////////////////
// PATHS
var src = 'src/';
var dest = 'build/';

////////////////////////////////////////////
// TASKS
/**
 *  Default build, watch, and server task
 */
gulp.task('default', ['build', 'watch', 'browser-sync']);
/**
 * Build everything
 */
gulp.task('build', ['scripts', 'less', 'images', 'copy']);
/**
 * Serve
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});
/**
 *  Bundle and minify javascript
 */
gulp.task('scripts', function() {
  return gulp.src(src + 'js/*.js')
    .pipe($.concat('main.js'))
    .pipe($.rename({
      suffix: '.min'
    }))
    // .pipe($.uglify())
    .pipe(gulp.dest(dest + 'js'));
});
/**
 *  Bundle and minify style
 */
gulp.task('less', function() {
  return gulp.src(src + 'less/hh.less')
    .pipe($.less({
      compress: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.minifyCss({
      keepBreaks: false
    }))
    .pipe(gulp.dest(dest + 'css'));
});
/**
 *  Optimize and copy images
 */
gulp.task('images', ['resize-images'], function() {
  return gulp.src(src + 'img/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(dest + 'img'));
});
var resizeImageTasks = [];

[800, 1000].forEach(function(size) {
  var resizeImageTask = 'resize_' + size;
  gulp.task(resizeImageTask, function() {
    return gulp.src(src + 'img/**/*.{jpg,png,tiff}')
      .pipe($.imageResize({
        width: size,
        height: size,
        upscale: false
      }))
      .pipe($.cache($.imagemin({
        optimizationLevel: 4,
        progressive: true,
        interlaced: true
      })))
      .pipe(gulp.dest(dest + 'img/' + size + '/'))
  });
  resizeImageTasks.push(resizeImageTask);
});

gulp.task('resize-images', resizeImageTasks);
/**
 *  Copy source files
 */
gulp.task('copy', function() {
  gulp.src(src + 'index.html')
    .pipe(gulp.dest('build'));
  gulp.src(src + 'humans.txt')
    .pipe(gulp.dest('build'));
});
/**
 *  Watch for code changes
 */
gulp.task('watch', function() {
  gulp.watch(src + 'js/*.js', ['scripts']);
  gulp.watch(src + 'less/*.less', ['less']);
  gulp.watch(src + 'images/**/*.*', ['images']);
  gulp.watch(src + '/**/*.html', ['copy']);
});
