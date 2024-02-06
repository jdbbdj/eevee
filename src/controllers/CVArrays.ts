import { Request, Response } from "express";
import ArraysSchema from "../resources/codevolution/array";
import { items, oneDimensionArray } from "../utils/arrayData";

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
