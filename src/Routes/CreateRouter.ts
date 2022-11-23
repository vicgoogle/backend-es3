import VoluntaryController from "@src/Controllers/VoluntaryController";
import CreateMiddleware from "@src/Middlewares/CreateMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const voluntaryController = new VoluntaryController();

CreateRouter.post(
  "",
  CreateMiddleware,
  voluntaryController.create.bind(voluntaryController)
);

export default CreateRouter;
