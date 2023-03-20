import express, { Request, Response, NextFunction, Router } from "express";
import {
  instantiate,
  getParamsID,
  getParamsQueryNameID,
  getQueryNameID,
} from "../../controllers/UserController";
const router: Router = express.Router();

router.get("/", instantiate);

router.put("/:id", getParamsID);

router.get("/user/", getQueryNameID);

router.get("/user/:id", getParamsQueryNameID);

export default router;
