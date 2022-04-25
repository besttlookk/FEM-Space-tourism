import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const LogoWrapper = styled.div`
  position: relative;
  height: 2.5rem;
  width: 80px;

  ${media.tablet} {
    height: 3.6rem;
  }

  ${media.laptop} {
    height: 4rem;
    width: 100px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Image alt="logo" src="/logo.svg" layout="fill" objectFit="contain" />
    </LogoWrapper>
  );
};

export default Logo;
