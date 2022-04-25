import { createGlobalStyle } from "styled-components";
import media from "./media";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-dark: hsl(230, 35%, 7%);
    --col-text:hsl(231, 77%, 90%);
    --col-light: hsl(0, 0%, 100%);
    --col-darkgray: hsl(234, 7%, 29%);
    --col-nav: hsl(0,0%,59);
    --col-transparent: hsla(0, 0%, 100%, 0.04);


    --font-primary: 'Barlow', sans-serif;
    --font-primary-condensed: 'Barlow Condensed', sans-serif;
    --font-secondary: 'Bellefair', sans-serif;

  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }


  body{
    min-height: 100vh;
    background-color: var(--col-dark);
    overflow-x: hidden;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  h1,h2,h3,h4{
    font-family: var(--font-secondary);
    font-weight: 400;
    color: var(--col-light);
  }

  h1{
    font-size: 8rem;
    text-transform: uppercase;
    line-height: 10rem;

    ${media.tablet}{
      font-size: 15rem;
    line-height: 15rem;

    }
  }

  h2{
    font-size: 5.6rem;
    text-transform: uppercase;

    ${media.tablet}{
      font-size: 8rem;
    }

    ${media.laptop}{
      font-size: 10rem;
    }

  }

  h3{
    font-size: 2.4rem;
    text-transform: uppercase;

    ${media.tablet}{
      font-size: 4rem;
    }

    ${media.laptop}{
      font-size: 5.6rem;
    }
  }

  h4{
    font-size: 1.6rem;
    text-transform: uppercase;

    ${media.tablet}{
      font-size: 2.4rem;
    }

    ${media.laptop}{
      font-size: 3.2rem;
    }
  }

  p{
    font-size: 1.6rem;
    color: var(--col-text);
    line-height: 2.8rem;

    ${media.laptop}{
      font-size: 1.8rem;
      line-height: 3.2rem;
    }
}



`;

export default GlobalStyle;
