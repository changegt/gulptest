var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	watch = require('gulp-watch');


gulp.task('less', function(){
	return watch('./static/less/*.less', function(){
		gulp.src('./static/less/*.less')
			.pipe(less())
			.pipe(gulp.dest('./static/css'));
	});
});
