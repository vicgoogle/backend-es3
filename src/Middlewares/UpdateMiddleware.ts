import { NextFunction, Request, Response } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import AppError from "@src/Errors/AppError";

export default function UpdateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const updateRequest = celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      name: Joi.string().required(),
      age: Joi.number().required(),
      sex: Joi.string().required(),
      phone: Joi.string().required(),
      rg: Joi.string().required(),
      occupation: Joi.string().required(),
      disponibility: Joi.string().required(),
    },
  });

  updateRequest(request, response, (err: Express.Response) => {
    if (err) {
      next(new AppError("Dados inválidos"));
    }

    next();
  });
}
