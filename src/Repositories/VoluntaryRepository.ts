import ICreateVoluntaryDTO from "@src/DTOs/ICreateVoluntaryDTO";
import Voluntary from "@src/Entities/Voluntary";
import IVoluntaryRepository from "@src/RepositoryInterfaces/IVoluntaryRepository";
import { getRepository, Repository } from "typeorm";

class VoluntaryRepository implements IVoluntaryRepository {
  private ormRepository: Repository<Voluntary>;

  constructor() {
    this.ormRepository = getRepository(Voluntary);
  }

  public async create(voluntaryData: ICreateVoluntaryDTO): Promise<Voluntary> {
    const voluntary = this.ormRepository.create(voluntaryData);

    await this.ormRepository.save(voluntary);

    return voluntary;
  }

  public async save(voluntary: Voluntary): Promise<Voluntary> {
    return this.ormRepository.save(voluntary);
  }

  public async findByRg(rg: string): Promise<Voluntary | undefined> {
    const foundRg = await this.ormRepository.findOne({
      where: { rg },
    });

    return foundRg;
  }

  public async findById(id: string): Promise<Voluntary | undefined> {
    const foundVoluntary = await this.ormRepository.findOne({
      where: { id },
    });

    return foundVoluntary;
  }

  public async delete(voluntary: Voluntary): Promise<void> {
    await this.ormRepository.delete(voluntary);
  }
}

export default VoluntaryRepository;
