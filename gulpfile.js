var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    pump = require('pump');

gulp.task('compress', function(cb) {
  pump([
      gulp.src('readmore.js'),
      sourcemaps.init(),
      uglify({
        mangle: true,
        compress: true,
        preserveComments: 'some'
      }),
      rename('readmore.min.js'),
      sourcemaps.write('./'),
      gulp.dest('./')
    ],
    cb
  );
});
