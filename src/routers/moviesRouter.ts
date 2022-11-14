import { Router } from "express";
import { moviesController } from "../controllers/moviesController.js";
import { validateSchema } from "../middlewares/genericSchemaMiddleware.js";
import { moviesSchema } from "../schemas/moviesSchemas.js";

const moviesRouter = Router();

moviesRouter.post("/",validateSchema(moviesSchema), moviesController.insertMovie);

export default moviesRouter;
