import { Movies } from "@prisma/client";
import { moviesRepository } from "../repositories/moviesRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

export type CreateMoviesData = Omit<Movies, "id">;

async function insertMovie(moviesData: CreateMoviesData) {
  const existingMovies = await moviesRepository.findByName(
    moviesData.name
  );
  if (existingMovies)
    throw conflictError("Movies names must be unique");

  await moviesRepository.create(moviesData);
}

async function getAllMovies() {
 return  await moviesRepository.getAllMovies();
}

async function getByCategory(category:string) {
  return  await moviesRepository.getByCategory(category);
 }
 

export const moviesService = {
  insertMovie,
  getAllMovies,
  getByCategory
};
