import { container } from "tsyringe";

import VoluntaryRepository from "@src/Repositories/VoluntaryRepository";
import IVoluntaryRepository from "@src/RepositoryInterfaces/IVoluntaryRepository";

container.registerSingleton<IVoluntaryRepository>(
  "VoluntaryRepository",
  VoluntaryRepository
);
