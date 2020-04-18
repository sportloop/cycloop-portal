import * as React from "react";
import { FC } from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Index: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Index;
