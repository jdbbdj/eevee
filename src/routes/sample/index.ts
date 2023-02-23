import express, { Request, Response, NextFunction, Router } from "express";
import { getComments, getTest } from "../../controllers/CommentsController";
const router: Router = express.Router();

router.get("/index", getComments);
router.post("/", getTest);

export default router;
