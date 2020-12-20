var shell = require('shelljs');
console.log('copy babel.config.js')
shell.cp('-f', 'tests/babel.config.js', '.');
