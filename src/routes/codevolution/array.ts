import express, { Request, Response, NextFunction, Router } from "express";
import {
  filterItems,
  arrayString,
  accessArrayAt,
} from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/filter", filterItems);
router.get("/arrayString", arrayString);
router.get("/accessArrayAt", accessArrayAt);
export default router;
