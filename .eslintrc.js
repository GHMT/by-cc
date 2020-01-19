module.exports = {
    extends: [
        'react-app',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		// 'prettier/react',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:jest-formatting/recommended',
		'plugin:prettier/recommended' // IMPORTANT: Make sure this is always the last configuration in the extends array. Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
    },
    // 'overrides': [
    //   {
    //     'files': ['**/*.ts?(x)'],
    //     'rules': {
    //       'additional-typescript-only-rule': 'warn'
    //     }
    //   }
    // ]
    plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'jsx-a11y',
		'jest',
		'jest-formatting',
		'prettier' // Leave this as the last plugin!
	],
    ignorePatterns: [
		'**/coverage',
        '**/lib',
        '**/dist',
        '**/build',
		'**/node_modules',
		'**/package-lock.json',
		'**/*.md', 
		'!**/.storybook',
		'**/*.eot',
		'**/*.ttf',
		'**/*.woff',
		'**/*.woff2',
		'**/*.html',
		'**/*.svg',
		'**/*.txt',
		'**/*.css',
		'**/*.scss',
		'**/*.ijmap',
		'**/*.ico',
		'**/*.png',
		'**/codepoints',
		'**/*.json'
	]
}