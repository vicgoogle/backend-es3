import { Request, Response } from "express";
import CreateService from "@src/Services/CreateService";
import readService from "@src/Services/ReadService";
import DeleteService from "@src/Services/DeleteService";
import UpdateService from "@src/Services/UpdateService";
import { container } from "tsyringe";

export default class VoluntaryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, age, sex, phone, rg, occupation, disponibility } = request.body;

    const createVoluntaryService = container.resolve(CreateService);

    const createdVoluntary = await createVoluntaryService.execute({
      name,
      age,
      sex,
      phone,
      rg,
      occupation,
      disponibility,
    });

    return response.json({ response: createdVoluntary });
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const readVoluntaryService = container.resolve(readService);

    const findVoluntary = await readVoluntaryService.execute(id);

    return response.json({
      voluntario: findVoluntary,
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Voluntario excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, name, age, sex, phone, rg, occupation, disponibility } = request.body;

    const updateService = container.resolve(UpdateService);

    const updatedVoluntary = await updateService.execute({
      id,
      name,
      age,
      sex,
      phone,
      rg,
      occupation,
      disponibility
    });

    return response.json({ response: updatedVoluntary });
  }
}
