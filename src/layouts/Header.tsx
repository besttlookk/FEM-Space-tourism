import React from "react";
import styled from "styled-components";

import LogoMobile from "../images/logo-mobile.svg";
import LogoDesktop from "../images/logo-desktop.svg";
import HamburgerMenu from "../images/hamburger-menu.svg";
import media from "../styles/media";
import NavList from "../components/NavList";

const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 2.4rem;

  ${media.tablet} {
    padding: 0;
  }

  ${media.laptop} {
    top: 4rem;
    max-width: 144rem;
    margin-inline: auto;
  }
`;

const MobileLogoStyle = styled.span`
  ${media.tablet} {
    display: none;
  }
`;

const DesktopLogoStyle = styled.span`
  display: none;
  ${media.tablet} {
    display: inline-block;
    margin-left: 4rem;
  }
`;

const MenuStyle = styled.span`
  ${media.tablet} {
    display: none;
  }
`;

const DesktopNavigation = styled.nav`
  background-color: #151823;
  padding-inline: 4.35rem 5.25rem;
  display: none;

  ${media.tablet} {
    display: block;
  }

  ${media.laptop} {
    position: relative;
    background-color: var(--col-transparent);
    backdrop-filter: blur(81.55px);
    padding-inline: 12.4rem;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateX(-80%);
      width: 47.3rem;
      height: 1px;
      background-color: white;
    }
  }
`;

type PropsType = {
  setIsMenuActive: (val: boolean) => void;
};

const Header = ({ setIsMenuActive }: PropsType) => {
  return (
    <HeaderEl>
      <MobileLogoStyle>
        <LogoMobile />
      </MobileLogoStyle>
      <DesktopLogoStyle>
        <LogoDesktop />
      </DesktopLogoStyle>

      <MenuStyle>
        <HamburgerMenu onClick={() => setIsMenuActive(true)} />
      </MenuStyle>

      <DesktopNavigation>
        <NavList />
      </DesktopNavigation>
    </HeaderEl>
  );
};

export default Header;
