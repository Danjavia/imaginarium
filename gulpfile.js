var gulp = require( 'gulp' ),
	connect = require( 'gulp-connect' ),
	minifyCss = require( 'gulp-minify-css' ),
	less = require( 'gulp-less' ),
	sass = require( 'gulp-sass' ),
	gconcat = require( 'gulp-concat' ),
	uglify = require( 'gulp-uglify' ),
	gutil = require( 'gulp-util' ),
	livereload = require( 'gulp-livereload' ),
    jshint = require( 'gulp-jshint' );

// gulp.task( 'webserver', function() {
//   	connect.server({
//   		livereload: true,
//   		// port: 80,
//   		// host: ''
//   	});
// });

gulp.task( 'less', function () {
	livereload.listen();
	return gulp.src( './assets/less/*.less' )
		.pipe( less() )
		.pipe( minifyCss() )
		.pipe( gulp.dest( './assets/css' ) )
    	// .pipe( connect.reload() );
});

gulp.task( 'sass', function () {
	livereload.listen();
	return gulp.src( './assets/sass/*.scss' )
		.pipe( sass() )
		.pipe( minifyCss() )
		.pipe( gulp.dest( './assets/css' ) )
    	.pipe( connect.reload() );
});

gulp.task( 'minify', function() {
	return gulp.src( './assets/css/*.css' )
		.pipe( minifyCss({compatibility: 'ie8'}) )
		.pipe( gulp.dest( './assets/css/' ));
});

gulp.task( 'concat-js', function() {
	livereload.listen();
	return gulp.src([ 
			'./build/react.js', 
			'./build/react-dom.js', 
			'./bower-components/jquery/dist/jquery.min.js', 
			'./bower-components/routie/dist/routie.min.js'
		])
        .pipe( gconcat( './assets/js/dist.js' ) )
        .pipe( uglify() )
    	.pipe( connect.reload() )
        .pipe( gulp.dest( './' ) );
});

gulp.task( 'watch', function() {
	livereload.listen();
    gulp.watch( './assets/sass/*/*.scss', [ 'sass' ]);

    // Javascript change + prints log in console
    gulp.watch( [ './assets/js/*.js', './assets/js/*/*.js' ] ).on( 'change', function( file ) {
    	livereload.changed( file.path );
        gutil.log( gutil.colors.yellow( 'JS changed' + ' (' + file.path + ')' ) );
    });
})

// gulp.task( 'default', [ 'sass', 'minify', 'concat-js', 'webserver', 'watch' ]);
gulp.task( 'default', [ 'sass', 'minify', 'concat-js', 'watch' ]);