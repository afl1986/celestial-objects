import { compose, times } from "ramda";
import { FC, useMemo, useCallback } from "react";

import "./WithBorder.style.css";

interface WithBorderProps {
  bordersCount: number;
  children: React.ReactNode;
}

export const WithBorder: FC<WithBorderProps> = ({ bordersCount, children }) => {
  const withBorder = useCallback((node: React.ReactNode) => {
    return <div className="with-border">{node}</div>;
  }, []);

  const withBorderFuncs = useMemo(
    () => times(() => withBorder, bordersCount),
    [bordersCount, withBorder]
  );

  if (!bordersCount) return <>{children}</>;
  return compose(...(withBorderFuncs as [typeof withBorder]))(children);
};
