export default class ArraysSchema {
  name: String;
  // just add "default"
  //creates and requires "new" when called on other parts of code
  //this represents the overall of User class
  constructor(name) {
    this.name = name;
  }

  arrayFilter(items) {
    let data = [];
    items.filter((item) => {
      data.push(item);
    });

    return data;
  }

  accessArrayAt(items, index) {
    return items[index];
  }

  arrayLength(items) {
    const lengthCheck = items.length;
    return lengthCheck + "";
  }

  arrayString(items) {
    return items.toString();
  }

  joinArray(items, joiner) {
    return items.join(joiner);
  }

  popArray(items, type) {
    if (type === "value") {
      items.pop();
      return items;
    } else {
      return items.pop();
    }
  }

  pushArray(items, type, pushValue) {
    if (type === "value") {
      items.push(pushValue);
      return items;
    } else {
      return items;
    }
  }
}
