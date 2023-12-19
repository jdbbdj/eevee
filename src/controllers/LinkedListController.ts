import { Request, Response } from "express";
import LinkedList from "../resources/linkedlist";

export const instantiate = (req: Request, res: Response) => {
  //user sets the initial value for the linkedlist
  //this uses param /linked/init/:num1
  console.log("A");
  let newLinkedList = new LinkedList(req.params.num1);
  res.send(newLinkedList);
};

export const push = (req: Request, res: Response) => {
  //this uses query value from the user
  console.log("HERE2");
  let newLinkedList = new LinkedList(req.query.num1);
  newLinkedList.push(req.query.num2);
  res.send(newLinkedList);
};

export const pop = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(req.query.num1);
  newLinkedList.push(req.query.num2);
  newLinkedList.push(req.query.num1);
  newLinkedList.pop();
  res.send(newLinkedList);
};

export const unshift = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(req.query.num1);
  newLinkedList.push(req.query.num2);
  newLinkedList.unshift(req.query.num2);
  newLinkedList.unshift(10);
  res.send(newLinkedList);
};

export const shift = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(req.query.num1);
  newLinkedList.push(req.query.num2);
  newLinkedList.unshift(10);
  newLinkedList.shift();
  res.send(newLinkedList);
};

export const get = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(0);
  newLinkedList.push(1);
  newLinkedList.push(2);
  newLinkedList.push(3);
  res.send(newLinkedList.findingByIndex(req.query.num2));
};

export const set = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(11);
  newLinkedList.push(3);
  newLinkedList.push(23);
  newLinkedList.push(7);
  newLinkedList.changeValueByIndex(req.query.num1, req.query.num2);
  res.send(newLinkedList);
};

export const insert = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(11);
  newLinkedList.push(3);
  newLinkedList.push(23);
  newLinkedList.push(7);
  newLinkedList.changeValueByIndex(req.query.num1, req.query.num2);
  res.send(newLinkedList);
};
