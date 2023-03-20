import { Request, Response } from "express";
import LinkedList from "../resources/LinkedList/index";

export const instantiate = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(req.params.num);
  res.send(newLinkedList);
};
