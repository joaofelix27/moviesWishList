import joi from "joi";
import { UpdateMoviesData } from "../services/moviesService";



export const updateMovieSchema = joi.object<UpdateMoviesData>({
  name: joi.string().required(),
  score:joi.number().min(1).max(10).required()
});
