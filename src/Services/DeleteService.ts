import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IVoluntaryRepository from "@src/RepositoryInterfaces/IVoluntaryRepository";

@injectable()
export default class DeleteService {
  constructor(
    @inject("VoluntaryRepository")
    private voluntaryRepository: IVoluntaryRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findVoluntary = await this.voluntaryRepository.findById(id);

    if (!findVoluntary || !findVoluntary.id) {
      throw new AppError("Voluntário não encontrado");
    }

    try {
      await this.voluntaryRepository.delete(findVoluntary);
    } catch (error) {
      throw new AppError("Não foi possível excluir o voluntário");
    }
  }
}
