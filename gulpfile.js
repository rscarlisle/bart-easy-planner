var gulp = require('gulp'),
    // uglify = require('gulp-uglify'),
    // plumber = require("gulp-plumber"),
    // concat = require('gulp-concat'),
    // cssMin = require("gulp-css"),
    htmlMin = require('gulp-htmlmin'),
    // rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

	gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
		});
	});
