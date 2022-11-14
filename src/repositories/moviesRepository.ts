import { Prisma } from "@prisma/client";
import { prisma } from "../database.js";
import { CreateMoviesData } from "../services/moviesService.js";

async function create(createRecommendationData: CreateMoviesData) {
  await prisma.movies.create({
    data: createRecommendationData,
  });
}

// interface FindAllWhere {
//   score: number;
//   scoreFilter: "lte" | "gt";
// }

function getAllMovies() {

  return prisma.movies.findMany({
    orderBy: { id: "asc" }
  });
}


function getByCategory(category: string) {
  return prisma.movies.findMany({
    where: { category },
  });
}

function findByName(name: string) {
  return prisma.movies.findUnique({
    where: { name },
  });
}


function findById(id:number) {
  return prisma.movies.findUnique({
    where: { id },
  });
}


async function deleteMovie(id: number) {
  await prisma.movies.delete({
    where: { id },
  });
}

export const moviesRepository = {
  create,
  findByName,
  getAllMovies,
  getByCategory,
  deleteMovie,
  findById
};
