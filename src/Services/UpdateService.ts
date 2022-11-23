import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IVoluntaryRepository from "@src/RepositoryInterfaces/IVoluntaryRepository";
import Voluntary from "@src/Entities/Voluntary";

interface IRequest {
  id: string;
  name: string;
  age: number;
  sex: string;
  phone: string;
  rg: string;
  occupation: string;
  disponibility: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("VoluntaryRepository")
    private voluntaryRepository: IVoluntaryRepository
  ) {}

  public async execute({ id, name, age, sex, phone, rg, occupation, disponibility }: IRequest): Promise<Voluntary> {
    const findVoluntary = await this.voluntaryRepository.findById(id);

    if (!findVoluntary || !findVoluntary.id) {
      throw new AppError("Voluntário não encontrado");
    }
    findVoluntary.name = name;
    findVoluntary.age = age;
    findVoluntary.sex = sex;
    findVoluntary.phone = phone;
    findVoluntary.rg = rg;
    findVoluntary.occupation = occupation;
    findVoluntary.disponibility = disponibility;

    const newVoluntary = await this.voluntaryRepository.save(findVoluntary);

    return newVoluntary;
  }
}
