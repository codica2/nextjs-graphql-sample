import React from "react";
import Head from "next/head";

import Header from "@views/components/Header";
import Footer from "@views/components/Footer";

import { Grid, Container } from "@views/styled";

const nav = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "About",
    link: "/about"
  }
];

interface IProps {
  title?: string;
}

const MainLayout: React.FC<IProps> = ({ title, children }) => (
  <Grid width="100%" gridTemplateRows="auto 1fr auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header items={nav} />

    <Container as="main" flex="auto" p={3}>
      <Container p={3}>{children}</Container>
    </Container>

    <Footer />
  </Grid>
);

MainLayout.defaultProps = {
  title: "This is the default title"
};

export default MainLayout;
