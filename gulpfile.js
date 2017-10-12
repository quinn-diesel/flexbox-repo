var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function (){
  gulp.src('17-pricing-grid/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('output'))
});

gulp.task('watch',function (){
  gulp.watch('autoprefixer/css/styles.css',['styles']);
});
