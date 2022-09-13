module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,js}',
		'fonts/*',
		'images/optimised/*.{jpg,png,svg,webp}',
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};