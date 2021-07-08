//CommonJS, every file in Node is a module (by default)
// Modules - encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const genericData = require('./6-alternative-flavor');
require('./7-mind-gernade')
sayHi('susan') 
sayHi(names.john)
sayHi(names.peter) 