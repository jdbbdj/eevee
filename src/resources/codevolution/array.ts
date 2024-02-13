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

  // last item
  popArray(items, type) {
    if (type === "value") {
      items.pop();
      return items;
    } else {
      return items.pop();
    }
  }

  // last item
  pushArray(items, type, pushValue) {
    if (type === "value") {
      items.push(pushValue);
      return items;
    } else {
      return items;
    }
  }

  //first item
  shiftArray(items, type) {
    if (type === "value") {
      items.shift();
      return items;
    } else {
      return items;
    }
  }

  unshiftArray(items, type, unshiftValue) {
    if (type === "value") {
      items.unshift(unshiftValue);
      return items;
    } else {
      return items;
    }
  }

  //delete: leave undefined || null value on an array index
  deleteArray(items, type, deleteIndex) {
    if (type === "value") {
      delete items[deleteIndex];
      return items;
    } else {
      return items;
    }
  }

  //concat: merge two arrays
  concatArray(items, type, addedArray) {
    if (type === "simple") {
      return items.concat(addedArray);
    } else {
      return items.concat(addedArray, items);
    }
  }

  //copy within: copy an item from array to another item(overwrites)
  copyWithinArray(
    items,
    type,
    overWrittenItem,
    itemCoppiedStart,
    itemCopiedEnd
  ) {
    if (type === "simple") {
      //pushes the remaining item
      return items.copyWithin(overWrittenItem, itemCoppiedStart);
    } else {
      //overwrites the items
      return items.copyWithin(overWrittenItem, itemCoppiedStart, itemCopiedEnd);
    }
  }

  //flattens the array
  flatArray(items) {
    return items.flat();
  }

  //splice: adds new item to an array
  spliceArray(items, type, indexPosition, numberOfItems, appendedArray) {
    if (type === "simple") {
      //pushes the remaining item
      appendedArray.map((item) => {
        items.splice(indexPosition, numberOfItems, item);
      });
      return items;
    }
  }

  //toSpliced: the same as splice but creates a new array
  toSpliceArray(items, type, indexPosition, numberOfItems, appendedArray) {
    if (type === "simple") {
      //pushes the remaining item
      appendedArray.map((item) => {
        items.toSplice(indexPosition, numberOfItems, item);
      });
      return items;
    }
  }
}
