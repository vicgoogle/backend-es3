import VoluntaryController from "@src/Controllers/VoluntaryController";
import { Router } from "express";
import ReadMiddleware from "@src/Middlewares/ReadMiddleware";

const ReadRouter = Router();
const voluntaryController = new VoluntaryController();

ReadRouter.get(
  "/read/:id",
  ReadMiddleware,
  voluntaryController.read.bind(voluntaryController)
);

export default ReadRouter;
