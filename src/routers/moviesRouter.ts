import { Router } from "express";
import { moviesController } from "../controllers/moviesController.js";
import { validateSchema } from "../middlewares/genericSchemaMiddleware.js";
import { moviesSchema } from "../schemas/moviesSchemas.js";

const moviesRouter = Router();

moviesRouter.post("/",validateSchema(moviesSchema), moviesController.insertMovie);
moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.get("/categories/:category", moviesController.getByCategory);
// moviesRouter.put("/",validateSchema(moviesSchema), moviesController.insertMovie);
moviesRouter.delete("/:id", moviesController.deleteMovie);

export default moviesRouter;
