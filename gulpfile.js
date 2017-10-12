var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function (){
  gulp.src('16-nesting-flexbox/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('output'))
});

gulp.task('watch',function (){
  gulp.watch('autoprefixer/css/styles.css',['styles']);
});
