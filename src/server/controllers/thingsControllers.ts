import { type Request, type Response } from "express";
import things from "../../things/things.js";

export const getThings = (_req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getOneThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingIwant = things.findIndex((thing) => thing.id === id);

  if (thingIwant === -1) {
    res.status(404).json({ message: "No thing found" });
    return;
  }

  res.status(200).json({ things: things[thingIwant].name });
};
