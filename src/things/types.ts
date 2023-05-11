export interface Thing {
  name: string;
}

export interface ThingDataStructure extends Thing {
  id: string;
}

export interface ThingsDataStructure {
  things: ThingDataStructure[];
}
