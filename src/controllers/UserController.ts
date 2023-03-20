import { Request, Response } from "express";
import User from "../classes/index";

export const instantiate = (req: Request, res: Response) => {
  res.send(new User("James"));

  // new User("string")
  //returns this.props = "string"
  //for example the props you'll be returning on constructor is this.name it will have name:"James"
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
