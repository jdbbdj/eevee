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
  concatArray,
  copyWithinArray,
  flatArray,
  spliceArray,
  toSpliceArray,
  indexOfArray,
  lastIndexOfArray,
  includesArray,
  findArray,
  sortArray,
  reverseArray,
  toReverseSortedArray,
  objectSortArray,
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
router.get("/concatArray", concatArray);
router.get("/copyWithinArray", copyWithinArray);
router.get("/flatArray", flatArray);
router.get("/spliceArray", spliceArray);
router.get("/toSpliceArray", toSpliceArray);

//search
router.get("/indexOfArray", indexOfArray);
router.get("/lastIndexOfArray", lastIndexOfArray);
router.get("/includesArray", includesArray);
router.get("/findArray", findArray);

//sort
router.get("/sortArray", sortArray);
router.get("/reverseArray", reverseArray);
router.get("/toReverseSortedArray", toReverseSortedArray);
router.get("/objectSortArray", objectSortArray);
export default router;
