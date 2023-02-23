import { Request, Response } from "express";

export const getComments = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("THIS IS RIDICULOUS");
};

export const getParamsID = (req: Request, res: Response) => {
  res.send(req.params.id);
};

export const getQueryNameID = (req: Request, res: Response) => {
  console.log("HERE");
  res.send(
    "ID and Name of the client::" +
      "id" +
      req.query.id +
      "name: " +
      req.query.name
  );
};

export const getParamsQueryNameID = (req: Request, res: Response) => {
  console.log("HERE2");
  res.send(
    "ID and Name of the client::" +
      "id" +
      req.query.id +
      "name: " +
      req.query.name +
      "params:" +
      req.params.id
  );
};
