import { Request, Response } from "express";
import LinkedList from "../resources/LinkedList/index";

export const instantiate = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(7);
  res.send(newLinkedList);
};

export const push = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(req.query.num1);
  newLinkedList.push(req.query.num2);
  res.send(newLinkedList);
  console.log("HERE");
};

export const pop = (req: Request, res: Response) => {
  let newLinkedList = new LinkedList(req.query.num1);
  newLinkedList.push(req.query.num2);
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
