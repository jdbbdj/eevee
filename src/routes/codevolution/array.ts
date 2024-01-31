import express, { Request, Response, NextFunction, Router } from "express";
import { instantiate, getter, setter } from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/", instantiate);

router.get("/:name", getter);

router.get("/", setter);

export default router;
