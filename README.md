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