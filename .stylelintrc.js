module.exports = {
	extends: 'stylelint-config-recommended',
	ignoreFiles: ['/coverage/**', '/lib/**', '/node_modules/**', '/**/*.md'],
	plugins: [
		'stylelint-scss',
	  ],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
	  }
};