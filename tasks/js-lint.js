module.exports = function (gulp, plugins, manifest) {
    gulp.task('js-lint', function () {
		return plugins.merge2(manifest.tasks.js.map(function (item) {
			var data = [];
			if (item.watch !== undefined) {
				data = item.watch;
			} else if (item.src !== undefined) {
				item.src
			}
			return gulp.src(data)
				.pipe(plugins.eslint('./node_modules/pulp-js/.eslintrc'))
				.pipe(plugins.eslint.format())
				.pipe(plugins.eslint.failAfterError());
		}));
	});
};