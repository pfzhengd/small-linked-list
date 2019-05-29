
import Node from './node';

class LinkedList {
  private head: Node | undefined;
  private current: Node | undefined;
  private previous:  Node | undefined;
  public length: number = 0;

  constructor() { }

  append(element: any): LinkedList {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      this.current = this.head;
      while ((this.current as Node).next) {
        this.current = (this.current as Node).next;
      }
      (this.current as Node).next = node;
    }
    this.length++;
    return this;
  }

  removeAt(position: number): LinkedList {
    if (position > -1 && position < this.length) {
      let index = 0;
      if (position === 0) {
        this.head = (this.head as Node).next;
      } else {
        this.current = this.head;
        while (index < position) {
          this.previous = this.current;
          this.current = (this.current as Node).next;
          (this.previous as Node).next = this.current;
          index++;
        }
      }
      this.length--;
    }
    return this;
  }

  insert(position: number, element: any): LinkedList {
    if (position > -1 && position < this.length) {
      let node = new Node(element);
      let index = 0;
      this.current = this.head;
      if (position === 0) {
        this.head = node;
        node.next = this.current;
      } else {
        while (index < position) {
          this.previous = this.current;
          node.next = (this.current as Node).next;
          (this.previous as Node).next = node;
          index++;
        }
      }
      this.length++;
    }
    return this;
  }

  getHead() {
    return this.head
  }
}

export default LinkedList;