//用到的各个插件
var gulp = require('gulp');
var fontmin = require('gulp-fontmin');
//压缩字体
function minifyFont(text, cb) {
	gulp
		.src('./font/*.ttf') //原字体所在目录
		.pipe(fontmin({
			text: text
		}))
		.pipe(gulp.dest('./fontdest/')) //压缩后字体的输出目录
		.on('end', cb);
}

gulp.task('minify-font', (cb) => {
	var buffers = [];
	gulp
		.src(['./index.html', './about.html']) //HTML文件所在目录
		.on('data', function(file) {
			buffers.push(file.contents);
		})
		.on('end', function() {
			var text = Buffer.concat(buffers).toString('utf-8');
			minifyFont(text, cb);
		});
});
// 运行gulp命令时依次执行以下任务
gulp.task('default', gulp.parallel('minify-font'));