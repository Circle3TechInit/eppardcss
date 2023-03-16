
// Imports
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
//const cleanCSS = require('gulp-clean-css');
//const imagemin = require('gulp-imagemin');
//const uglify = require('gulp-uglify-es').default;
//sass.compiler = require('node-sass');


// Fn

// Compile SCSS TO CSS ./sass/index
function buildTheme() {
    return src('public/sass/**/*.scss')
    .pipe(sass())
    //.pipe(purgecss({content: ['views/**/*.hbs']}))
    .pipe(dest('public/css'));
}


// Watch file change function
function watchTask() {
    watch(['public/sass/**/*.scss','views/**/*.hbs'], buildTheme);
}

//gulp.task(watch)



exports.default = series(buildTheme, watchTask)