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
  children: React.ReactNode;
}

const IntroLayout: React.FC<IProps> = ({ title, children }) => (
  <Grid width="100%" gridTemplateRows="auto 1fr auto" bg="bg">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header items={nav} />

    <Container as="main" p={3}>
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Box
          p={3}
          boxShadow="main"
          width="500px"
          border="2"
          borderColor="primary"
        >
          {children}
        </Box>
      </Flex>
    </Container>

    <Footer />
  </Grid>
);

IntroLayout.defaultProps = {
  title: "Nextjs GraphQL Sample"
};

export default IntroLayout;
