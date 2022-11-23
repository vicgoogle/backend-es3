import { inject, injectable } from "tsyringe";
import Voluntary from "@src/Entities/Voluntary";
import AppError from "@src/Errors/AppError";
import IVoluntaryRepository from "@src/RepositoryInterfaces/IVoluntaryRepository";

interface IRequest {
  name: string;
  age: number;
  sex: string;
  phone: string;
  rg: string;
  occupation: string;
  disponibility: string;

}

@injectable()
export default class CreateService {
  constructor(
    @inject("VoluntaryRepository")
    private voluntaryRepository: IVoluntaryRepository
  ) {}

  public async execute({ name, age, sex, phone, rg, occupation, disponibility }: IRequest): Promise<Voluntary> {
    const findEmail = await this.voluntaryRepository.findByRg(rg);

    if (findEmail) {
      throw new AppError("Voluntário já encontrado");
    }

    const voluntary = await this.voluntaryRepository.create({
      name,
      age,
      sex,
      phone,
      rg,
      occupation,
      disponibility,
    });

    return voluntary;
  }
}
