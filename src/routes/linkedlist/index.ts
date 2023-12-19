import express, { Request, Response, NextFunction, Router } from "express";
import {
  instantiate,
  pop,
  push,
  unshift,
  shift,
  get,
  set,
  insert,
} from "../../controllers/LinkedListController";
const router: Router = express.Router();

router.get("/init/:num1", instantiate);

//end
router.get("/push/", push);
router.get("/pop/", pop);
//start
router.get("/unshift/", unshift);
router.get("/shift/", shift);
//getByIndex
router.get("/get/", get);
router.get("/set/", set);
//middle
router.get("/insert/", insert);
export default router;
