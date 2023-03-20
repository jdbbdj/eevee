export default class Pointers {
  num1: Number;
  num2: Number;
  obj1: { value: number };
  obj2: { value: number };
  obj3: { value: number };

  constructor() {
    this.num1 = 5;
    this.num2 = this.num1;

    //obj1 points to this object
    this.obj1 = {
      value: 11,
    };

    //obj2 points to obj1
    this.obj2 = this.obj1;

    this.obj3 = {
      value: 53,
    };
  }

  notUsingPointer(newNum) {
    this.num1 = Number(newNum);
    return [this.num1, this.num2];
    //expected return is
    //this.num1 is new number
    //this.num2 is old number which is 5
  }
  usingPointer(newNum) {
    this.obj1.value = Number(newNum);
    return [this.obj1, this.obj2];
    // [
    //   {
    //     "value": 15
    //   },
    //   {
    //     "value": 15
    //   }
    // ]
    // this is the expected output for the obj2 is stored in memory of obj1
    // pointers are objects in simple terms
  }

  reversePointer() {
    this.obj2 = this.obj3;
    this.obj1 = this.obj2;

    return [this.obj1, this.obj2, this.obj3];

    //the original value:11 of this.obj1 will be considered as garbage by javascript
  }
}
