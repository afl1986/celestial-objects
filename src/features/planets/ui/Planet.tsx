import { FC, memo } from "react";

import "./Planet.style.css";

import { WithBorder } from "./WithBorder";

interface PlanetProps {
  title: string;
  selectedMoonsCount: number;
}

export const Planet: FC<PlanetProps> = memo(({ title, selectedMoonsCount }) => {
  return (
    <>
      <WithBorder bordersCount={selectedMoonsCount}>
        <div className="planet">
          <span>
            <span>{title}</span>
            <span className="moons-counter">{selectedMoonsCount || ""}</span>
          </span>
        </div>
      </WithBorder>
    </>
  );
});
