import React from "react";
import styled from "styled-components";
import CloseIcon from "../images/close.svg";
import media from "../styles/media";
import NavList from "./NavList";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  max-width: 100vw;
  z-index: 200;
  transform: translateX(100%);
  transition: all 0.4s;
  background-color: var(--col-transparent);
  backdrop-filter: blur(81.55px);
  padding: 3.4rem 0rem 3.4rem 3.2rem;

  &.active {
    transform: translateX(0%);
  }

  ${media.tablet} {
    display: none;
  }
`;

const CloseIconWrapper = styled.span`
  display: block;
  margin-right: 2.4rem;
  float: right;
`;

const NavEl = styled.nav`
  margin-top: 11.8rem;
`;

type PropsType = {
  isMenuActive: boolean;
  setIsMenuActive: (val: boolean) => void;
};
const MobileNavigation = ({ isMenuActive, setIsMenuActive }: PropsType) => {
  return (
    <Wrapper className={isMenuActive ? "active" : ""}>
      <CloseIconWrapper>
        <CloseIcon onClick={() => setIsMenuActive(false)} />
      </CloseIconWrapper>

      <NavEl>
        <NavList
          setIsMenuActive={setIsMenuActive}
          isMenuActive={isMenuActive}
        />
      </NavEl>
    </Wrapper>
  );
};

export default MobileNavigation;
