// testing external dependency (lodash)
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const flattenedItems = _.flattenDeep(items);
console.log(flattenedItems);
