import { FC } from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Cycloop - do what it takes</title>
        <meta name="title" content="Cycloop" />
        <meta name="description" content="do what it takes" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Index;
