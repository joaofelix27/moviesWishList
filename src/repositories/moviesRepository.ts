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

// function findAll(findAllWhere?: FindAllWhere) {
//   const filter = getFindAllFilter(findAllWhere);

//   return prisma.recommendation.findMany({
//     where: filter,
//     orderBy: { id: "desc" },
//     take: 10
//   });
// }

// function getAmountByScore(take: number) {
//   return prisma.recommendation.findMany({
//     orderBy: { score: "desc" },
//     take,
//   });
// }

// function getFindAllFilter(
//   findAllWhere?: FindAllWhere
// ): Prisma.RecommendationWhereInput {
//   if (!findAllWhere) return {};

//   const { score, scoreFilter } = findAllWhere;

//   return {
//     score: { [scoreFilter]: score },
//   };
// }

// function find(id: number) {
//   return prisma.recommendation.findUnique({
//     where: { id },
//   });
// }

function findByName(name: string) {
  return prisma.movies.findUnique({
    where: { name },
  });
}

// async function updateScore(id: number, operation: "increment" | "decrement") {
//   return prisma.recommendation.update({
//     where: { id },
//     data: {
//       score: { [operation]: 1 },
//     },
//   });
// }

// async function remove(id: number) {
//   await prisma.recommendation.delete({
//     where: { id },
//   });
// }

export const moviesRepository = {
  create,
  findByName
};
