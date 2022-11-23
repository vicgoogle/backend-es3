import VoluntaryController from "@src/Controllers/VoluntaryController";
import DeleteMiddleware from "@src/Middlewares/DeleteMiddleware";
import { Router } from "express";

const DeleteRouter = Router();
const voluntaryController = new VoluntaryController();

DeleteRouter.delete(
  "",
  DeleteMiddleware,
  voluntaryController.delete.bind(voluntaryController)
);

export default DeleteRouter;
