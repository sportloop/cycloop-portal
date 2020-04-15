/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { styled } from "linaria/react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

import "typeface-nunito";
import "typeface-poppins";

const Container = styled.div`
  :global() {
    html {
      box-sizing: border-box;
      font-family: Nunito, sans-serif;
      color: #fff;
      font-size: 62.5%;
    }

    body {
      background: #000;
      margin: 0;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
  }
`;

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
