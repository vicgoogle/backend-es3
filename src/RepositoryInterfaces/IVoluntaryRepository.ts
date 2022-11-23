import ICreateVoluntaryDTO from '@src/DTOs/ICreateVoluntaryDTO';
import Voluntary from '@src/Entities/Voluntary';

export default interface IVoluntaryRepository {
  create(data: ICreateVoluntaryDTO): Promise<Voluntary>;
  save(voluntary: Voluntary): Promise<Voluntary>;
  delete(voluntary: Voluntary): Promise<void>;
  findByRg(rg: string): Promise<Voluntary | undefined>;
  findById(id: string): Promise<Voluntary | undefined>;
}
