// CommonJs, every file in node is a module

const names = require("./04-names");
const sayHi = require("./05-utils");

const data = require("./06-alternative-exports");
console.log(data);

sayHi(names.john);
sayHi(names.peter);

// When you import a module with 'require', you actually invoke it
require("./07-mind-grenade");
