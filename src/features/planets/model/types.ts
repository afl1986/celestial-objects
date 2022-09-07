export interface IPlanet {
  id: number;
  title: string;
}

export interface IMoon {
  id: number;
  planetId: number;
  title: string;
}
