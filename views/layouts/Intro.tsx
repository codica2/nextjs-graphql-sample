import React from "react";
import Head from "next/head";

import Header from "@views/components/Header";
import Footer from "@views/components/Footer";

import { Grid, Container, Flex, Box } from "@views/styled";

const nav = [
  {
    label: "Login",
    link: "/login"
  },
  {
    label: "Register",
    link: "/register"
  },
  {
    label: "Forgot password",
    link: "/forgot-password"
  }
];

interface IProps {
  title?: string;
}

const IntroLayout: React.FC<IProps> = ({ children, title }) => (
  <Grid width="100%" gridTemplateRows="auto 1fr auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header items={nav} />

    <Container as="main" p={3}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Box p={3} boxShadow="violet" width="500px">
          {children}
        </Box>
      </Flex>
    </Container>

    <Footer />
  </Grid>
);

IntroLayout.defaultProps = {
  title: "This is the default title"
};

export default IntroLayout;
