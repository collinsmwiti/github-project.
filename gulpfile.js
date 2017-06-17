// Dependencies used in gulpfile.js. It entails both for the bower and modules

var gulp = require('gulp'); /*Dependency used for displaying in the terminal*/
var browserify = require('browserify'); /*Dependency used for browserification*/
var source = require('vinyl-source-stream'); /*Dependency used after building app.js*/
var concat = require('gulp-concat'); /*Dependency used for concatination*/

/*Task used for displaying in the console*/
gulp.task('myTask', function() {
  console.log('hello gulp');
});

/*Task used for concatination*/
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

/*Task used for browserifying concatinated items*/
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({
      entries: ['./tmp/allConcat.js']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
