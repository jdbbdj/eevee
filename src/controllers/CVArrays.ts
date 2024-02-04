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
