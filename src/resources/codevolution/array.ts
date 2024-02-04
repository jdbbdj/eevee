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
    return items.length;
  }

  arrayString(items) {
    return items.toString();
  }
}
