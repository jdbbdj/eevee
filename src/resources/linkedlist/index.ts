export class Node {
  //this could be stated inside the LinkedList
  //but we need to seperate it to avoid calling the this.value and this.next most of the time
  //only like this const newNode = new Node(4)
  //{
  //value:4,
  //next:null
  //}

  value: any;
  next: any;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  baseArr: number[];
  baseArrLinkedList: {};
  baseNode: { value: number; next: any };
  head: Node;
  tail: any;
  length: number;
  constructor(value) {
    //arrays and linked list are similar but
    //arrays has indexes
    //arrays are contiguous places in memory LL aren't they are all over the place
    /* this.baseArr = [11, 3, 23, 7];

    // this is an equivalent representation of baseArr as LinkedList
    this.baseArrLinkedList = {
      head: {
        value: 11,
        next: {
          value: 3,
          next: {
            value: 23,
            next: {
              value: 7,
              next: null,
            },
          },
        },
      },
    };

    this.baseNode = {
      value: 4,
      next: null,
    }; */

    const newNode = new Node(value);
    this.head = newNode;
    //{head:
    //{
    //value:value,
    //next:null
    //}
    //}
    this.tail = this.head;
    //copy the head but it will pointer
    //{tail:
    //{
    //value:value,
    //next:null
    //}
    //}
    this.length = 1;
  }

  //adding in the linkedlist
  //create a new Node
  //last node in the list point to new node
  //the tail should point also to the new node
  //edge case linkedlist that has no node
  //both heads and tails should point to it
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  ///END
  addingInEndLinkedList = () => {
    //in adding on the last item in a linkedlist on tail the value will always seek for the next with null
    //due to this it doesnt matter if the number of linkedlist is too many it will be constant time when adding
    //O[1] is the representation
  };

  removingInEndLinkedList = () => {
    //in opposites, when removing something on the last item linkedlist is you can't go backwards
    //it will reiterate from the head to find the value/pointer and set the tail to the new pointer
    //O[n] is the representation popping
  };

  ///START
  addingInStartLinkedList = () => {
    //in adding on the last item in a linkedlist is just adding the head pointer to the new node
    //due to this it doesnt matter if the number of linkedlist is too many it will be constant time when adding
    //O[1] is the representation
  };

  removingInStartLinkedList = () => {
    //in opposites, when removing something on the first item linkedlist is just pointing the head on the next node
    //O[1] is the representation
  };

  ///MIDDLE
  addingInMiddleLinkedList = () => {
    //start on the head to reiterate to the target node
    //the newNode pointer should be the same to the old pointer of replaced node
    //the pointer of replaced node will point to the newNode
    //O[n] is the representation
  };

  removingInMiddleLinkedList = () => {
    //in opposites it the old node will point to the next node after the target to be removed
    //the target node will be dropped
    //O[n] is the representation
  };

  ///FIND
  findingByValue = () => {
    //starts with the head
    //checks each time and reiterates
    //O[n] is the representation
  };

  findingByIndex = () => {
    //starts with the head
    //checks each time and reiterates
    //O[n] is the representation
  };
}
