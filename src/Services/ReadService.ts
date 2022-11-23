import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IVoluntaryRepository from "@src/RepositoryInterfaces/IVoluntaryRepository";
import Voluntary from "@src/Entities/Voluntary";

@injectable()
export default class ReadService {
  constructor(
    @inject("VoluntaryRepository")
    private voluntaryRepository: IVoluntaryRepository
  ) {}

  public async execute(id: string): Promise<Voluntary> {
    const findVoluntary = await this.voluntaryRepository.findById(id);

    if (!findVoluntary) {
      throw new AppError("Voluntário não encontrado");
    }

    return findVoluntary;
  }
}
