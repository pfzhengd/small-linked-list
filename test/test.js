const LinkedList = require('../out/index').default;

const test = new LinkedList.default();
test.append('lang').append('demo').append('key');
console.log(JSON.stringify(test.getHead()));
test.insert(2,"test");
console.log(JSON.stringify(test.getHead()));
test.removeAt(2);
console.log(JSON.stringify(test.getHead()));
test.append("element");
console.log(JSON.stringify(test.getHead()));
console.log(JSON.stringify(test.size()));
console.log(JSON.stringify(test.isEmpty()));
console.log(JSON.stringify(test.remove("element")))
console.log(test.indexOf("key"));
console.log(JSON.stringify(test.getHead()));