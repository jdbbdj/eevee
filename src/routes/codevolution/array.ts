import express, { Request, Response, NextFunction, Router } from "express";
import {
  instantiate,
  getter,
  setter,
  filterItems,
} from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/", instantiate);

router.get("/:name", getter);

router.get("/", setter);

router.get("/filter", filterItems);

export default router;
