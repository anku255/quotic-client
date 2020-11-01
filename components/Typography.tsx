import React from "react";

export const Heading = ({ children }: { children: string }): JSX.Element => (
  <div className="text-xs font-bold tracking-wider uppercase text-blackRussian">{children}</div>
);
