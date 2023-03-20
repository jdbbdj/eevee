import { Request, Response } from "express";
import LinkedList from "../resources/LinkedList/index";

export const instantiate = (req: Request, res: Response) => {
  res.send(new LinkedList());
};
