//crack the coding
//2.1 remove duplicates in a linked list
//2.2 implement an algorithm to find the nth last element in a linked list
//2.4 add two linked lists
class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    //this.addToHead(value); //constructor will start this function to add a value
  }
  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return newNode;
  }
  removeHead() {
    if (this.length == 0) {
      return undefined;
    }
    const val = this.head.value;
    this.head = this.head.next;
    this.length--;
    return val;
  }
  remove(val) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head.value === val) {
      this.removeFromHead();
      return this;
    }

    let previousNode = this.head;
    let thisNode = previousNode.next;

    while (thisNode) {
      if (thisNode.value === val) {
        break;
      }

      previousNode = thisNode;
      thisNode = thisNode.next;
    }

    if (thisNode === null) {
      return undefined;
    }

    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }
  find(val) {
    let thisNode = this.head;
    while (thisNode) {
      console.log(thisNode);
      if (val === thisNode.value) {
        return thisNode;
      }
      thisNode = thisNode.next;
    }
    return thisNode;
  }
  removeDuplicates() {
    let buffer = {};
    let previousNode = this.head;
    let thisNode = previousNode.next;

    buffer[thisNode.value] = 1;
    while (thisNode) {
      if (buffer[thisNode.value]) {
        previousNode.next = thisNode.next;
        this.length--;
      }
      buffer[thisNode.value] = 1;
      previousNode = thisNode;
      thisNode = thisNode.next;
    }
    return this;
  }
  findNthLastElement(val) {
    let thisNode = this.head;
    let count = 1;
    while (count < val) {
      thisNode = thisNode.next;
      count++;
    }
    return thisNode;
  }
  attachLists(second) {
    let thisNode = this.head;
    while (thisNode.next) {
      thisNode = thisNode.next;
    }
    if (second && second.head) {
      thisNode.next = second.head;
    }

    return thisNode;
  }
}
const printLink = link => {
  let thisNode = link.head;
  let tmpArr = [];
  while (thisNode) {
    tmpArr.push(thisNode.value);
    thisNode = thisNode.next;
  }
  console.log(tmpArr);
};
const addTwoLists = (first, second) => {
  let firstNode = first.head;
  let secondNode = second.head;
  var totalLink = new LinkedList();

  while (firstNode && secondNode) {
    totalLink.addToHead(firstNode.value + secondNode.value);
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  return totalLink;
};
const addListsRecursively = (first, second, value) => {
  if (first == null || second == null) {
    return;
  }
  let firstNode = first;
  let secondNode = second;
  var totalLink = new LinkedList();
  let addTotal = firstNode.value + secondNode.value + value;
  totalLink.addToHead(addTotal % 10);
  var more = new LinkedList();
  more = addListsRecursively(
    firstNode.next,
    secondNode.next,
    addTotal > 10 ? 1 : 0
  );
  totalLink.attachLists(more);
  return totalLink;
};
const createList = () => {
  const link = new LinkedList();
  link.addToHead(1);
  link.addToHead(2);
  link.addToHead(7);
  return link;
};
const start = () => {
  const first = createList();
  printLink(first);
  const second = createList();
  printLink(second);
  var totalLink = addListsRecursively(first.head, second.head, 0);
  printLink(totalLink);
};
module.exports = {
  start: start
};
