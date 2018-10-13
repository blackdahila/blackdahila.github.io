import { darken } from "polished";
import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  &:hover {
    fill: ${props => darken(0.1, props.fill || "")};
  }
`;
export const IconArrow = ({ color }: { color: string }) => (
  <StyledSvg
    width="20"
    height="77"
    viewBox="0 0 49 77"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    fill={color}
  >
    <path d="M15.0539 38.5003L48.1093 8.17848C48.6696 7.66422 48.9501 7.0724 48.9501 6.40383C48.9501 5.73526 48.6699 5.14344 48.1093 4.63026L43.9034 0.77207C43.3424 0.258077 42.6976 0 41.9705 0C41.2414 0 40.5965 0.258077 40.0359 0.77207L0.840188 36.7253C0.279572 37.2396 0 37.8314 0 38.5C0 39.1688 0.279572 39.7604 0.840188 40.2747L40.0338 76.2279C40.5953 76.743 41.2408 77 41.9696 77C42.6976 77 43.3424 76.743 43.9031 76.2279L48.109 72.3724C48.6693 71.8582 48.9489 71.2661 48.9489 70.597C48.9489 69.929 48.6696 69.3374 48.109 68.8231L15.0539 38.5003Z" />
  </StyledSvg>
);