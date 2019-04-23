import { Layout } from "antd";
import Head from "next/head";
import React from "react";

import Nav from "@views/components/Nav";

import Box from "@views/styled/Box";
import Container from "@views/styled/Container";
import Flex from "@views/styled/Flex";

const { Header, Footer, Content } = Layout;

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

const IntroLayout: React.FC<IProps> = ({
  children,
  title = "This is the default title"
}) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header>
      <Nav items={nav} />
    </Header>

    <Content>
      <Container p={3}>
        <Flex justifyContent="center" alignItems="center">
          <Box p={3} boxShadow="violet">
            {children}
          </Box>
        </Flex>
      </Container>
    </Content>

    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </Layout>
);

export default IntroLayout;
