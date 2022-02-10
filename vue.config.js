module.exports = {
	runtimeCompiler: true,
	chainWebpack: config => {
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.options({
				fix: true
			})
	},
	css: { // automaticky import sass variables do každeho suboru za pomoci webpacku
		loaderOptions: {
			sass: {
				prependData: `
					@import '@/assets/scss/_variables.scss';
				`
			}
		}
	}
}
