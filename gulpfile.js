const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const webpack = require('gulp-webpack');

gulp.task('default');

gulp.task('build-dev', () => {
	return gulp.src('src/**/*.js')
		.pipe(webpack({
			entry: "./src/index.js",
			output: {
        filename: 'taurid.js',
				sourceMapFilename: 'taurid.js.map'
      },
			module: {
		    preLoaders: [
		      {
		        test: /\.js$/,
		        loader: "source-map-loader"
		      },
					{
			      test: /\.js?$/,
			      exclude: /(node_modules|bower_components)/,
			      loader: 'babel', // 'babel-loader' is also a legal name to reference
			      query: {
			        presets: ['es2015']
			    	}
    			}
		    ]
  		},
			devtool: "source-map"
		}))
		.pipe(gulp.dest('dist'));
});
