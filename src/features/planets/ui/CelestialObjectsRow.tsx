import { FC } from "react";

import { Moon } from "./Moon";
import { Planet } from "./Planet";
import { MoonState } from "../types";
import { IPlanet } from "../model/types";

import "./CelestialObjectsRow.style.css";

interface CelestialObjectsRowProps {
  planet: IPlanet;
  moons: MoonState[];
  selectedMoonsCount: number;
  toogleMoon: (moonId: number) => void;
}

export const CelestialObjectsRow: FC<CelestialObjectsRowProps> = ({
  planet,
  moons,
  toogleMoon,
  selectedMoonsCount,
}) => {
  return (
    <div className="row">
      <Planet title={planet.title} selectedMoonsCount={selectedMoonsCount} />
      {moons.map((moon) => {
        return <Moon key={moon.id} onClick={toogleMoon} {...moon} />;
      })}
    </div>
  );
};
