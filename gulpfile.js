//this lists the node modules required by the gulp commands below
var gulp = require('gulp'),
	//minifies
	uglify = require('gulp-uglify'),
	//compiles sass
	compass = require('gulp-compass'),
	//notifies user in the terminal of things
	notify = require('gulp-notify'),
	//notifies user of js errors in the terminal
	jshint = require('gulp-jshint'),
	//optimizes images
	imagemin = require('gulp-imagemin'),
	//looks for changed files
	changed = require('gulp-changed'),
	//compresses files
	concat = require('gulp-concat'),
	//debugs javascript
	stripDebug = require('gulp-strip-debug'),
	//lets you sync to a browser to watch your changes live
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


// JS debugging and hinting for the main javascript file (if you run it with plugins there are usually too many errors)
// jshint, stripDebug
gulp.task('cleanJS', function() {
    return gulp.src('assets-src/js/main.js')
        .pipe(jshint())
	 	.pipe(jshint.reporter('default'))
        .pipe(stripDebug())
        .pipe(notify({ message: 'cleanJS task complete - any js hinting or debugging will appear' }))
});

// JS concatenation and minifying task
// concat and uglify
gulp.task('scripts', function() {
    return gulp.src(['assets-src/js/plugins.js','assets-src/js/*.js'])
        .pipe(uglify())
        .pipe(concat('custom.min.js'))
        .pipe(gulp.dest('assets-minify/js'))
        .pipe(notify({ message: 'Scripts task complete - js files minified to minify-assets folder' }))
});

// Compass task
// compass, notify
gulp.task('compass', function() {
	return gulp.src('assets-src/css/sass/*.scss')
		.pipe(compass({
			config_file: 'assets-src/css/config.rb',
			css: 'assets-minify/css',
			sass: 'assets-src/css/sass'
		}))
		.pipe(notify({
			message: 'Compass task complete - sass files have been compiled to minify-assets folder'
		}))
});


// Minify Images task
// imagemin, changed
gulp.task('images', function() {
	var dest = 'assets-src/img/';

	return gulp.src('assets-src/img/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest))
		.pipe(notify({
			message: 'Image task complete - new images have been optimized'
		}));
});


//Run scripts, compass, and images for Browsersync
gulp.task('build', ['cleanJS', 'scripts', 'compass']);

// broswer-sync task
// browsersync + watch for new files
gulp.task('browser-sync', function() {
	var watchFiles = [
		'*.html',
		'assets-src/css/sass/*.scss',
		'assets-src/js/*.js',
		'assets-src/img/**',
	];

    browserSync({
		files: watchFiles,
		//change depending on what port you're working on locally or use localhost
		//proxy: "http://10.0.10.54:8011"
		server: {
            baseDir: "./"
        }
	});
});

// Watch Task
// watch js, compass, images, and run browsersync
gulp.task('watch', ['build','browser-sync'], function(){
	gulp.watch('assets-src/js/*.js', ['scripts']);
	gulp.watch('assets-src/css/sass/*.scss', ['compass']);
	gulp.watch('assets-src/img/**', ['images']);
	gulp.watch('*.html');
});

gulp.task('default', ['watch']);