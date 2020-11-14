import { ReactNode } from "react";

/**
 * Conditionally render passed components.
 * Alertnative for ternary syntax
 * https://github.com/facebook/jsx/issues/65#issuecomment-255484351
 *
 * @param {condition, then, else} props
 */
export const If = (props: { condition: boolean; then?: ReactNode; else?: ReactNode }): JSX.Element | null => {
  const condition = props.condition || false;
  const positive = props.then ?? null;
  const negative = props.else ?? null;

  return (condition ? positive : negative) as any;
};
