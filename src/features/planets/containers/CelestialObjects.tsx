import { FC, useState, useCallback } from "react";

import { CelestialObjectsRow } from "../ui";
import { MoonState, IgetMoonsByPlanet } from "../types";
import { planets as _planets, moonsState } from "../mock";

interface CelestialObjectsProps {}

export const CelestialObjects: FC<CelestialObjectsProps> = () => {
  const [planets] = useState(_planets);

  const [moons, setMoons] = useState<MoonState[]>(moonsState);

  const getMoonsByPlanet: IgetMoonsByPlanet = useCallback((planetId, moons) => {
    return moons.filter((moon) => moon.planetId === planetId);
  }, []);

  const getSelectedMoonsByPlanet: IgetMoonsByPlanet = useCallback(
    (planetId, moons) => {
      return getMoonsByPlanet(planetId, moons).filter((moon) => moon.selected);
    },
    [getMoonsByPlanet]
  );

  const toogleMoon = useCallback((moonId: number) => {
    setMoons((moons) =>
      moons.map((moon) =>
        moon.id === moonId ? { ...moon, selected: !moon.selected } : moon
      )
    );
  }, []);

  return (
    <div>
      {planets.map((planet) => (
        <CelestialObjectsRow
          key={planet.id}
          planet={planet}
          toogleMoon={toogleMoon}
          moons={getMoonsByPlanet(planet.id, moons)}
          selectedMoonsCount={getSelectedMoonsByPlanet(planet.id, moons).length}
        />
      ))}
    </div>
  );
};
