const fs = require('fs');
// Named import
const { animateString } = require('./animate-string');

const contents = fs.readdirSync('./animals');

animateString(contents.join('\n'));