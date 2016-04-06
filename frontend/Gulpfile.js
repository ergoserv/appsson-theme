var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    gulp.src('assets/SASS/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('default',function() {
    gulp.watch('assets/SASS/**/*.scss',['styles']);
});