import { FC } from "react";
import { styled } from "linaria/react";

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  text-align: center;
  padding: 1rem;
`;

const Description = styled.h3`
  font-size: 3rem;
  color: #ccc;
  font-weight: 200;
  padding: 1rem;
`;

const Hero: FC = () => {
  return (
    <Container>
      <Title>cycloop</Title>
      <Description>Activity tracking inside and out</Description>
    </Container>
  );
};

export default Hero;
