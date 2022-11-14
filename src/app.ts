import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import moviesRouter from "./routers/moviesRouter";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use("/movies", moviesRouter);
app.use(errorHandlerMiddleware);

export default app;
