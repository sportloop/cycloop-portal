import { FC } from "react";
import { styled } from "linaria/react";
import Link from "next/link";

import Logo from "./Logo";

const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 5rem;
  line-height: 0;
  color: #fff;
`;

const Section = styled.section`
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  text-align: center;

  @media screen and (min-width: 600px) {
    max-width: 30rem;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    max-width: 20rem;
    :nth-child(-n + 2) {
      text-align: right;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #bbb;
`;

const SectionItems = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const SectionItem = styled.li``;

const SectionLink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
  line-height: 4rem;
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  color: #ccc;
`;

const Footer: FC = () => {
  return (
    <Container>
      <Section>
        <Title>
          <Logo />
        </Title>
        <Copyright>©2020 Cycloop</Copyright>
      </Section>
      <Section>
        <SectionTitle>Menu</SectionTitle>
        <SectionItems>
          <SectionItem>
            <Link href="/features" passHref>
              <SectionLink>Features</SectionLink>
            </Link>
          </SectionItem>
          <SectionItem>
            <Link href="/pricing" passHref>
              <SectionLink>Pricing</SectionLink>
            </Link>
          </SectionItem>
          <SectionItem>
            <Link href="/contribute" passHref>
              <SectionLink>Contribute</SectionLink>
            </Link>
          </SectionItem>
        </SectionItems>
      </Section>
      <Section>
        <SectionTitle>Social</SectionTitle>
        <SectionItems>
          <SectionItem>
            <SectionLink href="https://github.com/sportloop">
              GitHub
            </SectionLink>
          </SectionItem>
        </SectionItems>
      </Section>
      <Section>
        <SectionTitle>Get Started</SectionTitle>
      </Section>
    </Container>
  );
};

export default Footer;
