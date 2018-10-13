import React from "react";
import { StyledSvg } from "./StyledSvg";

export const IconLinkedin = ({
  color,
  width,
}: {
  color: string;
  width: string;
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height="59"
    x="100"
    fill={color}
    viewBox="0 0 59 59"
  >
    <path d="M14.0309 19H1.96909C1.43376 19 1 19.416 1 19.9289V57.0711C1 57.5842 1.43376 58 1.96909 58H14.0309C14.5662 58 15 57.5842 15 57.0711V19.9289C15 19.416 14.5662 19 14.0309 19Z" />
    <path d="M8.00322 0C3.5902 0 0 3.3638 0 7.49845C0 11.6349 3.5902 15 8.00322 15C12.4127 15 16 11.6347 16 7.49845C16.0002 3.3638 12.4127 0 8.00322 0Z" />
    <path d="M43.7795 18C38.997 18 35.4615 20 33.3172 22.2725V19.8556C33.3172 19.3417 32.889 18.9249 32.3605 18.9249H20.9567C20.4282 18.9249 20 19.3417 20 19.8556V57.0691C20 57.5832 20.4282 57.9998 20.9567 57.9998H32.8384C33.3669 57.9998 33.7952 57.5832 33.7952 57.0691V38.6571C33.7952 32.4526 35.5276 30.0355 39.9736 30.0355C44.8157 30.0355 45.2004 33.9104 45.2004 38.9763V57.0693C45.2004 57.5834 45.6287 58 46.1572 58H58.0433C58.5718 58 59 57.5834 59 57.0693V36.657C59 27.4313 57.1916 18 43.7795 18Z" />
    <rect x="1" y="48" width="14" height="15" fill="none" />
    <rect x="20" y="58" width="14" height="15" fill="none" />
    <rect x="45" y="58" width="14" height="15" fill="none" />
  </StyledSvg>
);
