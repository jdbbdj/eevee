import express, { Request, Response, NextFunction, Router } from "express";
import { instantiate } from "../../controllers/LinkedListController";
const router: Router = express.Router();

router.get("/:num", instantiate);

export default router;
