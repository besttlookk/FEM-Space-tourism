import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import ExploreBtn from "../components/ExploreBtn";
import media from "../styles/media";
import { Centered, SharedTitleStyle } from "../styles/shared";

const HomeEl = styled(Centered)`
  background-image: url(/images/home/background-home-mobile.jpg);
  background-size: cover;
  background-position: bottom;
  min-height: 100vh;

  ${media.tablet} {
    background-image: url(/images/home/background-home-tablet.jpg);
    background-position: center;
    padding-top: 20rem;
  }

  ${media.laptop} {
    padding-top: 38rem;
    padding-inline: 16.5rem;

    background-image: url(/images/home/background-home-desktop.jpg);
  }
`;

const Wrapper = styled(Centered)`
  flex-direction: column;
  gap: 8.1rem;
  text-align: center;

  ${media.laptop} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 144rem;
    margin-inline: auto;
    gap: 0;
    width: 128rem;
    text-align: start;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  max-width: 45rem;

  ${media.tablet} {
    gap: 2.4rem;
  }

  ${media.laptop} {
    align-items: flex-start;
  }
`;

const TitleStyle = styled(SharedTitleStyle)`
  color: var(--col-text);
`;

const Home: NextPage = () => {
  return (
    <HomeEl>
      <Head>
        <title> Home | Space Tourism</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Content>
          <TitleStyle> So, you want to travel to</TitleStyle>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </Content>

        <ExploreBtn />
      </Wrapper>
    </HomeEl>
  );
};

export default Home;