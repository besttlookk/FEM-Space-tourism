import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import media from "../styles/media";
import Link from "next/link";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: row;
    gap: 3.6rem;
  }

  ${media.laptop} {
    flex-direction: row;
    gap: 4.8rem;
  }
`;

const ItemEl = styled.li`
  font-family: var(--font-primary-condensed);
  text-transform: uppercase;
  font-size: 1.6rem;
  padding-block: 1.6rem;
  letter-spacing: 2.7px;
  cursor: pointer;

  a {
    color: white;
  }

  .number {
    font-weight: 700;
    display: inline-block;
    width: 1.9rem;
    margin-right: 1rem;
  }

  &.active {
    border-right: 3px solid white;
  }

  ${media.tablet} {
    font-size: 1.4rem;
    padding-block: 4rem;
    letter-spacing: 2.36px;

    .number {
      display: none;
    }

    &.active {
      border: none;
    }
  }

  ${media.laptop} {
    font-size: 1.6rem;
    letter-spacing: 2.6px;
    position: relative;

    .number {
      display: inline-block;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      transform-origin: center;
      width: 100%;
      height: 3px;
      transform: scale(0);
      transition: all 0.4s;
    }

    &:hover::after {
      background-color: white;
      opacity: 50%;
      transform: scale(100%);
    }

    &.active::after {
      opacity: 1;
      background-color: white;

      transform: scale(100%);
    }
  }
`;

type PropsType = {
  setIsMenuActive?: (val: boolean) => void;
  isMenuActive?: boolean;
};

const NavList = ({ setIsMenuActive, isMenuActive }: PropsType) => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);

  const handleClick = () => {
    if (isMenuActive && setIsMenuActive) {
      setIsMenuActive(false);
    }
  };

  // console.log(router);
  return (
    <ListEl>
      <ItemEl className={pathname === "/" ? "active" : ""}>
        <Link href="/">
          <a onClick={handleClick}>
            <span className="number">00</span>
            <span className="label">Home</span>
          </a>
        </Link>
      </ItemEl>

      <ItemEl className={pathname === "/destination" ? "active" : ""}>
        <Link href="/destination">
          <a onClick={handleClick}>
            <span className="number">01</span>
            <span className="label">Destination</span>
          </a>
        </Link>
      </ItemEl>

      <ItemEl className={pathname === "/crew" ? "active" : ""}>
        <Link href="/crew">
          <a onClick={handleClick}>
            <span className="number">02</span>
            <span className="label">Crew</span>
          </a>
        </Link>
      </ItemEl>

      <ItemEl className={pathname === "/technology" ? "active" : ""}>
        <Link href="/technology">
          <a onClick={handleClick}>
            <span className="number">03</span>
            <span className="label">Technology</span>
          </a>
        </Link>
      </ItemEl>
    </ListEl>
  );
};

export default NavList;
