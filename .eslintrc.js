module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier', 'testing-library', 'react-hooks'],
	env: {
		browser: true
	},
	rules: {
		'prettier/prettier': [
		'error',
		{
				semi: false,
				trailingComma: 'none',
				arrowParens: 'avoid',
				endOfLine: 'auto',
				singleQuote: true,
				formatOnSave: false
		}
		],
		'react/jsx-closing-bracket-location': 'off',
		'react/jsx-closing-tag-location': 'off',
		'react/jsx-curly-spacing': 'off',
		'react/jsx-curly-newline': 'off',
		'react/jsx-equals-spacing': 'off',
		'react/jsx-first-prop-new-line': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-max-props-per-line': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-multi-spaces': 'off',
		'react/self-closing-comp': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'class-methods-use-this': 'off',
		'testing-library/await-async-query': 'error',
		'testing-library/no-await-sync-query': 'error',
		'testing-library/no-debug': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off'
	}
}
  