var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')

gulp.task('build', function () {

  let dependencies = ['react', 'react-dom']

  return browserify({entries: 'src/js/app.jsx', extensions: ['.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    // .external(dependencies) TODO generate dependencies in another bundle
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['build'], function () {
    gulp.watch('src/js/*.jsx', ['build'])
})

gulp.task('default', ['watch'])


// import gulp from 'gulp'
// import sourcemaps from 'gulp-sourcemaps'
// import babel from 'gulp-babel'
// import concat from 'gulp-concat'
//
// import newer from 'gulp-newer'
// import browserSync from 'browser-sync'
//
//
// gulp.task('concat', ['copy-react'], () => {
//   return gulp.src('src/js/**/*.{js,jsx}')
//     .pipe(sourcemaps.init({ loadMaps: true }))
//     .pipe(babel({presets: ['es2015', 'react']}))
//     .pipe(concat('app.js'))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('assets/js'))
// })
//
//
// gulp.task('copy-react', () => {
//   return gulp.src('node_modules/react/dist/react.js')
//     .pipe(newer('assets/js/src/vendor/react.js'))
//     .pipe(gulp.dest('assets/js/src/vendor'))
// })
//
// gulp.task('copy-html', () => {
//   return gulp
//     .src([
//       'src/html/*.html'
//     ])
//     .pipe(gulp.dest('assets'))
// })
//
// gulp.task('copy-js-vendor', function() {
//   return gulp
//     .src([
//       'assets/js/src/vendor/react.js'
//     ])
//     .pipe(gulp.dest('assets/js'))
// })
//
// // Watch JS/JSX files
// gulp.task('watch', () => {
//   gulp.watch('assets/js/src/**/*.{js,jsx}', ['concat'])
// })
//
// gulp.task('browsersync', () => {
//   browserSync({
//     server: {
//       baseDir: './'
//     },
//     open: false,
//     online: false,
//     notify: false,
//   })
// })
//
// gulp.task('build', ['copy-html', 'copy-js-vendor', 'concat'])
// gulp.task('default', ['build', 'browsersync', 'watch'])
