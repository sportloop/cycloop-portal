import { FC } from "react";
import { styled } from "linaria/react";
import Head from "next/head";

const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid #333;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
`;

const Button = styled.button`
  border: 1px solid #999;
  border-radius: 0.6rem;
  color: white;
  font-size: 1.6rem;
  padding: 0.6rem 1rem;
  background: transparent;
`;

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Cycloop - do what it takes</title>
      </Head>
      <Heading>
        <Title>
          <Logo />
        </Title>
        <Button>Sign up</Button>
      </Heading>
    </>
  );
};

export default Index;
