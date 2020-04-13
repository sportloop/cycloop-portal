import { FC } from "react";
import { styled } from "linaria/react";
import Link from "next/link";

import Logo from "./Logo";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid #333;
`;

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

const Header: FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Title>
          <Logo />
        </Title>
      </Link>
      <Button>Sign up</Button>
    </Container>
  );
};

export default Header;
