module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,js}',
		'fonts/*.{otf}',
		'images/optimised/*.{jpg,png,svg,webp}',
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};