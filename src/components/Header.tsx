import { FC } from "react";
import { styled } from "linaria/react";
import Link from "next/link";

import Logo from "./Logo";

const Container = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`;

const Title = styled.a`
  font-size: 5rem;
  line-height: 0;
  color: #fff;
`;

const Anchor = styled.a`
  font-size: 2.2rem;
  line-height: 0;
  color: #fff;
  margin-left: 1.2rem;
`;

const Header: FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Title>
          <Logo />
        </Title>
      </Link>
      <div>
        <Anchor href="https://cycloop.app">app</Anchor>
        <Link href="/auth" passHref>
          <Anchor>sign up</Anchor>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
