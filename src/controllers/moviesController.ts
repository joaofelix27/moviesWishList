import { Request, Response } from "express";
import { CreateMoviesData, moviesService } from "../services/moviesService.js";

async function insertMovie(req: Request, res: Response) {
  const movie: CreateMoviesData = req.body;
  await moviesService.insertMovie(movie);

  res.sendStatus(201);
}

async function getAllMovies(req: Request, res: Response) {
  const movies = await moviesService.getAllMovies();
  res.status(200).send(movies);
}

async function getByCategory(req: Request, res: Response) {
  const { category }  = req.params;
  const movies = await moviesService.getByCategory(category);
  res.status(200).send(movies);
}

export const moviesController = {
  insertMovie,
  getAllMovies,
  getByCategory
};
