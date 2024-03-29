import { Request, Response } from "express";
import ArraysSchema from "../resources/codevolution/array";
import {
  complexArray,
  items,
  oneDimensionArray,
  sortToAlphabetical,
  objectArray,
  numericArray,
} from "../utils/arrayData";

export const filterItems = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");

  const filteredData = schemaInitiator.arrayFilter(items);
  res.send(filteredData);
};

export const arrayString = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");

  const returnString = schemaInitiator.arrayString(oneDimensionArray);
  res.send(returnString);
};

export const accessArrayAt = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");

  const returnString = schemaInitiator.accessArrayAt(
    items,
    req.body.arrayIndex
  );
  res.send(returnString);
};

export const arrayLength = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.arrayLength(oneDimensionArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const joinArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.joinArray(
    oneDimensionArray,
    req.body.joiner
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const popArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.popArray(
    oneDimensionArray,
    req.body.typeHandler
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const pushArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.pushArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.pushValue
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const shiftArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.shiftArray(
    oneDimensionArray,
    req.body.typeHandler
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const unshiftArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.unshiftArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.unshiftValue
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const deleteArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.deleteArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.deleteIndex
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const concatArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.concatArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.addedArray
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const copyWithinArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.copyWithinArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.overWrittenItem,
    req.body.itemCoppiedStart,
    req.body.itemCopiedEnd
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const flatArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.flatArray(complexArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const spliceArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.spliceArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.indexPosition,
    req.body.numberOfItems,
    req.body.appendedArray
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const toSpliceArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.toSpliceArray(
    oneDimensionArray,
    req.body.typeHandler,
    req.body.indexPosition,
    req.body.numberOfItems,
    req.body.appendedArray
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const indexOfArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.indexOfArray(
    oneDimensionArray,
    req.body.item,
    req.body.start
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const lastIndexOfArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.lastIndexOfArray(
    oneDimensionArray,
    req.body.searchItem
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const includesArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.includesArray(
    oneDimensionArray,
    req.body.searchItem
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const findArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.findArray(
    oneDimensionArray,
    req.body.searchItem
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

//////***************ARRAY SORT ***************************/
export const sortArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.sortArray(sortToAlphabetical);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const reverseArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.reverseArray(
    sortToAlphabetical,
    req.body.typeHandler
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const toReverseSortedArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.toReverseSortedArray(
    sortToAlphabetical,
    req.body.typeHandler
  );
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const objectSortArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.objectSortArray(objectArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const numericSortArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.numericSortArray(numericArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const randomnumericSortArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.randomnumericSortArray(numericArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

/*********************************ARRAY ITERATOR */

export const forEachArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.forEachArray(numericArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const mapArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.mapArray(numericArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const flatMapArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.flatMapArray(numericArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};

export const filterArray = (req: Request, res: Response) => {
  let schemaInitiator = new ArraysSchema("James");
  const returnString = schemaInitiator.filterArray(numericArray);
  //you can't return numbers on res.send() always convert it to string before sending it back
  res.send(returnString);
};
