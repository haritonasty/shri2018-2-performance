const del = require('del');
const gulp = require('gulp');
const uglifyes = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const browserSync = require('browser-sync').create();


gulp.task('styles', function () {
    return gulp.src('src/styles.css')
        // .pipe(concat('main.css'))
        .pipe(cleanCss())
        .pipe(purgecss({
            content: ["src/**/*.html", "src/**/*.js"]
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
    return del('public');
});

gulp.task('assets', function () {
    return gulp.src('src/assets/**/**', {since: gulp.lastRun('assets')})
        .pipe(gulp.dest('public/assets'));
});


gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(uglifyes({compress: true, mangle: true, ecma: 6}))
        .pipe(gulp.dest('public'));
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
});

gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'assets', 'scripts', 'html')));

gulp.task('watch', function () {
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/*.css', gulp.series('styles'));
    gulp.watch('src/*.js', gulp.series('scripts'));
    gulp.watch('src/assets/*.*', gulp.series('assets'));
});

gulp.task('serve', function () {
    browserSync.init({server: 'public'});
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
