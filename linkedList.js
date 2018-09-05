class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }
  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }
  find(val) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.value === val) {
        return thisNode;
      }

      thisNode = thisNode.next;
    }
    return thisNode;
  }
}
const start = () => {
  const list = new LinkedList("first");
  list.addToHead("second");
  list.addToHead("third");
  list.addToHead("fourth");
  list.removeFromHead();
  console.log(list);
  console.log(list.find("first"));
};
module.exports = {
  start: start
};
