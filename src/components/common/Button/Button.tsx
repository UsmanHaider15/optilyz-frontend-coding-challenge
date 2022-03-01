import React, { FunctionComponent, ReactNode } from "react";
import { StyledButton } from "./StyledButton";

export interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FunctionComponent<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
