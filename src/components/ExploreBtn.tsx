import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  color: var(--col-dark);
  background-color: var(--col-light);
  text-transform: uppercase;
  font-family: var(--font-secondary);
  font-size: 2rem;

  ${media.tablet} {
    width: 24.2rem;
    height: 24.2rem;
    font-size: 3.2rem;
  }

  ${media.laptop} {
    position: relative;
    width: 27.4rem;
    height: 27.4rem;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      width: 45rem;
      height: 45rem;
      border-radius: 50%;
      background-color: white;
      opacity: 0.1;
      transform: scale(0);
      transition: all 0.3s;
    }

    &:hover::after {
      transform: scale(100%);
    }
  }
`;

const ExploreBtn = () => {
  return <Wrapper>Explore</Wrapper>;
};

export default ExploreBtn;
