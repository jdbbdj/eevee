import express, { Request, Response, NextFunction, Router } from "express";
import { instantiate, getter, setter } from "../../controllers/UserController";
const router: Router = express.Router();

router.get("/", instantiate);

router.get("/user/:name", getter);

router.get("/user/", setter);

export default router;
