import { Movies } from "@prisma/client";
import { recommendationRepository } from "../repositories/moviesRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

export type CreateRecommendationData = Omit<Movies, "id" | "score">;

async function insert(createRecommendationData: CreateRecommendationData) {
  // const existingRecommendation = await recommendationRepository.findByName(
  //   createRecommendationData.name
  // );
  // if (existingRecommendation)
  //   throw conflictError("Recommendations names must be unique");

  // await recommendationRepository.create(createRecommendationData);
}

export const moviesService = {
  insert
};
