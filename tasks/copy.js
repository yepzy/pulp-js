module.exports = function (gulp, plugins, manifest) {
	gulp.task('copy', function () {
        if (manifest.tasks.copy !== undefined) {
            return plugins.merge2(manifest.tasks.copy.map(function (item) {
                return gulp.src(item.src)
                    .pipe(gulp.dest(item.dest))
            }));
        }
	});
};