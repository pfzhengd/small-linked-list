 <div>
  <a href="https://www.npmjs.com/package/linked-list">
    <img src="https://img.shields.io/npm/v/linked-list.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/linked-list/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/linked-list/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/linked-list/lib/themes/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/linked-list/lib/themes/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</div>

## LinkedList
制作数据链表结构

### 安装
```
npm i linked-list
```

### 引用
``` JS
const LinkedList = require('../out/index').default;

const test = new LinkedList.default();
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

### 提供的API


方法名 | 参数 | 用途
---------|----------|---------
 append | element:any | 向实例的链表追加元素
 insert | (position:number,element:any) | 指定位置插入一个元素
 removeAt | (position:number) | 批定位置移除一个元素