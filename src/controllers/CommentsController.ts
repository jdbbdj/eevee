import { Request, Response } from "express";

export const getComments = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("THIS IS RIDICULOUS");
};

export const getTest = (req: Request, res: Response) => {
  res.send(req.body);
};
