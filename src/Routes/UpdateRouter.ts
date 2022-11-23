import VoluntaryController from "@src/Controllers/VoluntaryController";
import { Router } from "express";
import UpdateMiddleware from "@src/Middlewares/UpdateMiddleware";

const UpdateRouter = Router();
const voluntaryController = new VoluntaryController();

UpdateRouter.put(
  "",
  UpdateMiddleware,
  voluntaryController.update.bind(voluntaryController)
);

export default UpdateRouter;
