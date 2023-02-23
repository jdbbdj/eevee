import express, { Request, Response, NextFunction, Router } from "express";
import {
  getComments,
  getParamsID,
  getParamsQueryNameID,
  getQueryNameID,
} from "../../controllers/CommentsController";
const router: Router = express.Router();

router.get("/", getComments);

router.put("/:id", getParamsID);

router.get("/user/", getQueryNameID);

router.get("/user/:id", getParamsQueryNameID);

export default router;
