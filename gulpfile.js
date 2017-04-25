var gulp = require('gulp');
var print = require('gulp-print');
var babel = require('gulp-babel');
var filter = require('gulp-filter');
var eslint = require('gulp-eslint');
var supervisor = require('gulp-supervisor');

gulp.task('build', function() {
  const jsFilter = filter('**/*.js', {restore: true});
  return gulp.src('app/**/*')                  // select all files in the app folder
      .pipe(print())                           // print each file in the stream
      .pipe(jsFilter)                          // filter non-JS files from stream
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(babel({ presets: ['es2015'] }))    // transpile js files ES2015 to ES5 using ES2015 preset
      .pipe(jsFilter.restore)                  // restore other files to stream
      .pipe(gulp.dest('build'));               // copy the results to the build folder
});

gulp.task( "supervisor", ["build"], function() {
    supervisor( "build/bin/www" );
} );

gulp.task('watch', function(){
    gulp.watch('app/**/*.*', ['build']);
});
