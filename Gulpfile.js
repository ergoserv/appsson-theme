var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    gulp.src('backend/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('backend/assets/css/'));
});

gulp.task('default',function() {
    gulp.watch('backend/assets/sass/**/*.scss',['styles']);
});