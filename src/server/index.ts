import express from "express";
import morgan from "morgan";
import {
  deleteThing,
  getOneThing,
  getThings,
} from "./controllers/thingsControllers.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);

app.get("/things/:idThing", getOneThing);

app.delete("/things/:idThing", deleteThing);

export default app;
