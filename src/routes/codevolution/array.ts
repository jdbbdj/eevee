import express, { Request, Response, NextFunction, Router } from "express";
import {
  filterItems,
  arrayString,
  accessArrayAt,
  arrayLength,
  joinArray,
} from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/filter", filterItems);
router.get("/arrayString", arrayString);
router.get("/accessArrayAt", accessArrayAt);
router.get("/arrayLength", arrayLength);
router.get("/joinArray", joinArray);
export default router;
