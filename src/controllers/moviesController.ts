import { Request, Response } from "express";
import { moviesSchema } from "../schemas/moviesSchemas.js";
import { moviesService } from "../services/moviesService.js";
import { wrongSchemaError } from "../utils/errorUtils.js";

async function insert(req: Request, res: Response) {
  const validation = moviesSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await moviesService.insert(req.body);

  res.sendStatus(201);
}


export const moviesController = {
  insert,
};
