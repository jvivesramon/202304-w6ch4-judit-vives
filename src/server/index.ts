import express from "express";
import morgan from "morgan";
import { getOneThing, getThings } from "./controllers/thingsControllers";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);

app.get("/things/:idThing", getOneThing);

export default app;
