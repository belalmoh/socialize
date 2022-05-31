// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

const {theme, plugins} = require('../../tailwind-workspace-preset');

module.exports = {
	content: [
		join(__dirname, 'src/lib/**/!(*.stories|*.spec).{js,jsx}'),
		...createGlobPatternsForDependencies(__dirname),
	],
	theme,
	plugins
};