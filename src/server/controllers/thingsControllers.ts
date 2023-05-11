import { type Request, type Response } from "express";
import things from "../../things/things.js";
import { type Thing } from "../../things/types.js";
import crypto from "crypto";

export const getThings = (_req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getOneThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingPosition = things.findIndex((thing) => thing.id === id);

  if (thingPosition === -1) {
    res.status(404).json({ message: "No thing found" });
    return;
  }

  res.status(200).json({ things: things[thingPosition].name });
};

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingPosition = things.findIndex((thing) => thing.id === id);

  if (thingPosition === -1) {
    res.status(404).json({ message: "No thing found" });
    return;
  }

  things.splice(thingPosition, 1);

  res.status(200).json({ message: "Thing deleted" });
};

export const addThing = (
  req: Request<Record<string, unknown>, Record<string, unknown>, Thing>,
  res: Response
) => {
  const newThing = { id: crypto.randomUUID(), ...req.body };

  things.push(newThing);
  res.status(201).json({ things: newThing });
};
