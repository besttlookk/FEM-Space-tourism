import styled from "styled-components";
import media from "./media";

export const SharedTitleStyle = styled.p`
  font-family: var(--font-primary-condensed);
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3.38px;
  color: var(--col-light);
  text-align: center;

  span {
    font-weight: 700;
    opacity: 0.25;
    margin-right: 0.8rem;
  }

  ${media.tablet} {
    text-align: start;
  }

  ${media.laptop} {
    font-size: 2.8rem;
  }
`;

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubHeading1 = styled.p`
  font-family: var(--font-secondary);
  font-size: 2.8rem;
  color: var(--col-light);
  text-transform: uppercase;
`;

export const SubHeading2 = styled.p`
  font-family: var(--font-primary-condensed);
  font-size: 1.4rem;
  color: var(--col-text);
  letter-spacing: 2.36px;
  text-transform: uppercase;
`;

export const NavText = styled(SubHeading2)`
  ${media.tablet} {
    letter-spacing: 2.7px;
    font-size: 1.6rem;
  }
`;
