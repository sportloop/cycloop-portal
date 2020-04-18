/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import { styled } from "linaria/react";

const bannerSizes = require("../../public/banner_image.jpg?resize&sizes[]=360&sizes[]=600&sizes[]=1000&sizes[]=1200&sizes[]=1600&sizes[]=2000");
const banner1200 = require("../../public/banner_image.jpg?resize&size=1200");

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20vh 2rem;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  text-align: center;
  padding: 1rem;
  text-shadow: 0 0 1.6rem black;
`;

const Description = styled.h3`
  font-size: 3rem;
  color: #ccc;
  font-weight: 200;
  padding: 1rem;
  text-shadow: 0 0 1.6rem black;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Hero: FC = () => {
  return (
    <Container>
      <picture>
        <source
          srcSet={bannerSizes.srcSet}
          src={bannerSizes.src}
          type="image/jpg"
        />
        <Image src={banner1200} />
      </picture>
      <Title>cycloop</Title>
      <Description>Activity tracking inside and out</Description>
    </Container>
  );
};

export default Hero;
