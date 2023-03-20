import express, { Request, Response, NextFunction, Router } from "express";
import { instantiate, push } from "../../controllers/LinkedListController";
const router: Router = express.Router();

router.get("/", instantiate);

router.get("/push/", push);

export default router;
