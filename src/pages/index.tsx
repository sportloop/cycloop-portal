import { FC } from "react";
import { styled } from "linaria/react";
import Head from "next/head";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
`;

const Subtitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 500;
  color: #ccc;
`;

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Cycloop - do what it takes</title>
      </Head>
      <Container>
        <Title>cycloop</Title>
        <Subtitle>do what it takes</Subtitle>
      </Container>
    </>
  );
};

export default Index;
