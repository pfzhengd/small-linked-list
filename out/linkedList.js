"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class LinkedList {
    constructor() {
        this.length = 0;
    }
    append(element) {
        const node = new node_1.default(element);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.current = this.head;
            while (this.current.next) {
                this.current = this.current.next;
            }
            this.current.next = node;
        }
        this.length++;
        return this;
    }
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let index = 0;
            if (position === 0) {
                this.head = this.head.next;
            }
            else {
                this.current = this.head;
                while (index++ < position) {
                    this.previous = this.current;
                    this.current = this.current.next;
                }
                this.previous.next = this.current.next;
            }
            this.length--;
        }
        return this.current.element;
    }
    insert(position, element) {
        if (position > -1 && position < this.length) {
            let node = new node_1.default(element);
            let index = 0;
            this.current = this.head;
            if (position === 0) {
                node.next = this.current;
                this.head = node;
            }
            else {
                while (index++ < position) {
                    this.previous = this.current;
                    this.current = this.current.next;
                }
                node.next = this.current;
                this.previous.next = node;
            }
            this.length++;
        }
        return this;
    }
    getHead() {
        return this.head;
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    indexOf(element) {
        this.current = this.head;
        let index = -1;
        while (this.current) {
            if (this.current.element === element) {
                return index;
            }
            index++;
            this.current = this.current.next;
        }
        return -1;
    }
    remove(element) {
        const position = this.indexOf(element);
        return this.removeAt(position);
    }
}
exports.default = LinkedList;
//# sourceMappingURL=linkedList.js.map