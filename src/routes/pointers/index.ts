import express, { Request, Response, NextFunction, Router } from "express";
import {
  instantiate,
  notUsingPointers,
  usingPointer,
  reversePointer,
} from "../../controllers/PointerController";
const router: Router = express.Router();

router.get("/", instantiate);

router.get("/noPointer/:num", notUsingPointers);

router.get("/usingPointer/:num", usingPointer);

router.get("/reversePointer", reversePointer);

export default router;
