
import Node from './node';
import linkedList from '.';

class LinkedList {
  private head: Node | undefined;
  private current: Node | undefined;
  private previous: Node | undefined;
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
        while (index++ < position) {
          this.previous = this.current;
          this.current = (this.current as Node).next;
        }
        (this.previous as Node).next = (this.current as Node).next;
      }
      this.length--;
    }
    return (this.current as Node).element;
  }

  insert(position: number, element: any): LinkedList {
    if (position > -1 && position < this.length) {
      let node = new Node(element);
      let index = 0;
      this.current = this.head;
      if (position === 0) {
        node.next = this.current;
        this.head = node;
      } else {
        while (index++ < position) {
          this.previous = this.current;
          this.current = (this.current as Node).next;
        }
        node.next = (this.current as Node);
        (this.previous as Node).next = node;
      }
      this.length++;
    }
    return this;
  }

  getHead(): Node | undefined {
    return this.head;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  indexOf(element: any): number {
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

  remove(element: any): LinkedList {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

}

export default LinkedList;