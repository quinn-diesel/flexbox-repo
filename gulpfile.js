var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function (){
  gulp.src('18-flexbox-equal/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('output'))
});

gulp.task('watch',function (){
  gulp.watch('autoprefixer/css/styles.css',['styles']);
});
