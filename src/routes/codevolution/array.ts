import express, { Request, Response, NextFunction, Router } from "express";
import {
  filterItems,
  arrayString,
  accessArrayAt,
  arrayLength,
  joinArray,
  popArray,
  pushArray,
  shiftArray,
  unshiftArray,
  deleteArray,
} from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/filter", filterItems);
router.get("/arrayString", arrayString);
router.get("/accessArrayAt", accessArrayAt);
router.get("/arrayLength", arrayLength);
router.get("/joinArray", joinArray);
router.get("/popArray", popArray);
router.get("/pushArray", pushArray);
router.get("/shiftArray", shiftArray);
router.get("/unshiftArray", unshiftArray);
router.get("/deleteArray", deleteArray);
export default router;
