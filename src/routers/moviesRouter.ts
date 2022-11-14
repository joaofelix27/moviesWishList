import { Router } from "express";
import { moviesController } from "../controllers/moviesController.js";
import { validateSchema } from "../middlewares/genericSchemaMiddleware.js";
import { moviesSchema } from "../schemas/moviesSchemas.js";
import { updateMovieSchema } from "../schemas/updateMovieSchema.js";

const moviesRouter = Router();

moviesRouter.post("/",validateSchema(moviesSchema), moviesController.insertMovie);
moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.get("/categories/:category", moviesController.getByCategory);
moviesRouter.put("/",validateSchema(updateMovieSchema), moviesController.updateMovie);
moviesRouter.delete("/:id",validateSchema(updateMovieSchema), moviesController.deleteMovie);

export default moviesRouter;
