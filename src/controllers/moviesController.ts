import { Request, Response } from "express";
import { moviesSchema } from "../schemas/moviesSchemas.js";
import { CreateMoviesData, moviesService } from "../services/moviesService.js";
import { wrongSchemaError } from "../utils/errorUtils.js";

async function insertMovie(req: Request, res: Response) {
const movie:CreateMoviesData = req.body
  await moviesService.insertMovie(movie);

  res.sendStatus(201);
}


export const moviesController = {
  insertMovie,
};
