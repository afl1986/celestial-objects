import { FC, memo, useCallback } from "react";

import "./Moon.style.css";

import { MoonState } from "../types";

interface MoonProps extends MoonState {
  onClick: (moonId: number) => void;
}

export const Moon: FC<MoonProps> = memo(({ title, selected, onClick, id }) => {
  const moonCn = `moon ${selected ? "moon_active" : ""}`;

  const handleClick = useCallback(() => onClick(id), [id, onClick]);
  return (
    <div className={moonCn} onClick={handleClick}>
      {title}
    </div>
  );
});
