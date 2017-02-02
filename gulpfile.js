var gulp = require('gulp');
var print = require('gulp-print');
var babel = require('gulp-babel');

gulp.task('js', function() {
  return gulp.src('app/**/*.js')               // #1. select all js files in the app folder
        .pipe(print())                           // #2. print each file in the stream
      .pipe(babel({ presets: ['es2015'] }))    // #3. transpile ES2015 to ES5 using ES2015 preset
      .pipe(gulp.dest('build'));               // #4. copy the results to the build folder
});

//TODO Pipe config separately and pipe bin/www separately
//TODO Hook up gulp and supervisor to run
//TODO Docker-ize
