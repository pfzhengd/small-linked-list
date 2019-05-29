 <div>
  <a href="https://www.npmjs.com/package/smaill-linked-list">
    <img src="https://img.shields.io/npm/v/smaill-linked-list.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/smaill-linked-list/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/smaill-linked-list/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/smaill-linked-list/lib/themes/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/smaill-linked-list/lib/themes/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</div>

## smaill-linked-list
A simple linked list.

### installation
```
npm i smaill-linked-list
```

### Usage
``` JS
const smaill-linked-list = require('../out/index').default;

const test = new smaill-linked-list.default();
test.append('lang').append('demo').append('key');
console.log(JSON.stringify(test.getHead()));
test.insert(2,"test");
console.log(JSON.stringify(test.getHead()));
test.removeAt(2);
console.log(JSON.stringify(test.getHead()));

// {"next":{"next":{"next":null,"element":"key"},"element":"demo"},"element":"lang"}
// {"next":{"next":{"next":{"next":null,"element":"key"},"element":"test"},"element":"demo"},"element":"lang"}
// {"next":{"next":{"next":null,"element":"key"},"element":"demo"},"element":"lang"}
```

### API


Name | Parameters | Description
---------|----------|---------
 append | element:any | Append elements to the linked list of instances
 insert | (position:number,element:any) | Specify a position of the insertion element
 removeAt | (position:number) | Remove an element from the specified location

### LICENSE
MIT @ Zheng peng fei