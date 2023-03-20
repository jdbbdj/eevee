import express, { Request, Response, NextFunction, Router } from "express";
import {
  instantiate,
  pop,
  push,
  unshift,
} from "../../controllers/LinkedListController";
const router: Router = express.Router();

router.get("/", instantiate);

router.get("/push/", push);

router.get("/pop/", pop);
router.get("/unshift/", unshift);
export default router;
