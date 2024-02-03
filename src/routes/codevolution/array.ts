import express, { Request, Response, NextFunction, Router } from "express";
import {
  instantiate,
  getter,
  setter,
  filterItems,
} from "../../controllers/CVArrays";
const router: Router = express.Router();

router.get("/filter", filterItems);

export default router;
