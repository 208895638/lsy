var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect'); //热加载
//var jsmin = require("gulp-uglify");//压缩js
//var yasuocss = require("gulp-minify-css");//压缩css
//var imgmin = require("gulp-imagemin");//压缩img
//var jsold = "need/mobile/*.js";
var jsnew = "need/mobiles";
var imgSrc = 'psd/images/*';
var imgDest = 'images/';
//压缩图片
gulp.task('imgmin',function(){
  gulp.src(imgSrc)
  .pipe(imgmin())
  .pipe(gulp.dest(imgDest));
});
//压缩js
gulp.task('jsmin',function(){
  gulp.src(jsold)
  .pipe(jsmin())
  .pipe(gulp.dest(jsnew));
});
//压缩css
gulp.task("yasuocss",function(){
	gulp.src("cssss/*")
	.pipe(yasuocss())
	.pipe(gulp.dest("csss"));
});
gulp.task('sass',function() {
	return gulp.src('./app/sass/*.*').pipe(sass()).pipe(gulp.dest('./app/css'));
})
gulp.task('default',['sass','watch']);
gulp.task('watch',function(){
	return gulp.watch('./app/sass/*.*',['sass']);
})

// 热加载
 
// gulp.task('connect', function() {
//   connect.server({
//     root: 'app',
//     livereload: true,
//     port: 8888
//   });
// });
// gulp.task('html', function () {
//   gulp.src('./app/*.html')
//     .pipe(connect.reload());
// });
// gulp.task('js', function () {
//   gulp.src('./app/js/*.*')
//     .pipe(connect.reload());
// });
// gulp.task('css', function () {
//   gulp.src('./app/sass/*.*')
//     .pipe(connect.reload());
// });
// gulp.task('watch', function () {
//   gulp.watch(['./app/sass/*','./app/*.html','./app/js/*.*'], ['css','sass','html','js']);
// });
 
// gulp.task('default', ['connect', 'watch']);

