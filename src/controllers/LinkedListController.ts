import { Request, Response } from "express";
import LinkedList from "../resources/LinkedList/index";

export const instantiate = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(7);
  res.send(newLinkedList);
};

export const push = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(null);
  newLinkedList.push(req.query.num2);
  res.send(newLinkedList);
};
