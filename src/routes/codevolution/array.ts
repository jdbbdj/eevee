import express, { Request, Response, NextFunction, Router } from "express";
import { filterItems, arrayString } from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/filter", filterItems);
router.get("/arrayString", arrayString);
export default router;
