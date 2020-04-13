import { FC } from "react";
import { styled } from "linaria/react";
import Head from "next/head";
import Link from "next/link";

import Logo from "../components/Logo";

const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid #333;
`;

const Title = styled.h1`
const Title = styled.a`
  font-size: 5rem;
  line-height: 0;
  color: #fff;
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
        <meta name="title" content="Cycloop" />
        <meta name="description" content="do what it takes" />
      </Head>
      <Heading>
        <Title>
          <Logo />
        </Title>
        <Link href="/" passHref>
          <Title>
            <Logo />
          </Title>
        </Link>
        <Button>Sign up</Button>
      </Heading>
    </>
  );
};

export default Index;
