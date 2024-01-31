import { Request, Response } from "express";
import ArraysSchema from "../resources/codevolution/array";

export const instantiate = (req: Request, res: Response) => {
  res.send(new ArraysSchema("James"));

  // new User("string")
  //returns this.props = "string"
  //for example the props you'll be returning on constructor is this.name it will have name:"James"
};

//represents get it calls the this property that is being returned on the function
export const getter = (req: Request, res: Response) => {
  let newName = new ArraysSchema(req.params.name);
  //getUser functions just return the name being set
  let handleName = newName.getUser();
  console.log("GETTER");
  res.send(handleName);
};

export const setter = (req: Request, res: Response) => {
  let newName = new ArraysSchema("James");
  //setName overwrites the stated name on the User instantiates
  newName.setName(req.query.name);
  console.log("HERE");
  res.send(newName);
};
