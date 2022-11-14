import joi from "joi";
import { CreateMoviesData } from "../services/moviesService.js";


export const moviesSchema = joi.object<CreateMoviesData>({
  name: joi.string().required(),
  plataform: joi.string().required(),
  category: joi.string().required(),
  status: joi.string().valid('Watched', 'toWatch').required(),
  score:joi.number().min(1).max(10)
});
