import { IMoon } from "./model/types";

export interface MoonState extends IMoon {
  selected: boolean;
}

export interface IgetMoonsByPlanet {
  (planetId: number, moons: MoonState[]): MoonState[];
}
