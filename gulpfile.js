const { dest, series, src, watch } = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

function cleanCss() {
	return del(['css/style.css']);
}

function scss() {

	// Copy FontAwesome WebFonts
	src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
		.pipe(dest('webfonts/'));

	// Do Sass
	return src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./css/'))
}

function dev() {
	watch('sass/**/*.scss', series(cleanCss, scss));
}


exports.cleanCss = cleanCss;
exports.css = series(cleanCss, scss);
exports.dev = dev;