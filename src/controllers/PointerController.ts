import { Request, Response } from "express";
import Pointers from "../resources/pointers/index";

export const instantiate = (req: Request, res: Response) => {
  res.send(new Pointers());
};

export const notUsingPointers = (req: Request, res: Response) => {
  let handlePointer = new Pointers();
  //this points only to the variable
  let newNums = handlePointer.notUsingPointer(req.params.num);
  res.send(newNums);
};

export const usingPointer = (req: Request, res: Response) => {
  let handlePointer = new Pointers();
  //this points to the object form of the value
  let newNums = handlePointer.usingPointer(req.params.num);
  res.send(newNums);
};

export const reversePointer = (req: Request, res: Response) => {
  let handlePointer = new Pointers();
  let newNums = handlePointer.reversePointer();
  res.send(newNums);
};
