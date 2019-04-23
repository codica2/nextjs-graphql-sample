import { Layout } from "antd";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import Nav from "components/Nav";

import Container from "styled/Container";
import Flex from "styled/Flex";

import { MeComponent } from "generated/apolloComponents";

const { Header, Footer, Content } = Layout;

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

const MainLayout: React.FC<IProps> = ({
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
      <Flex justifyContent="space-between">
        <Nav items={nav} />

        <MeComponent>
          {({ data, loading }) => {
            if (!data || loading || !data.me) {
              return null;
            }

            return (
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            );
          }}
        </MeComponent>
      </Flex>
    </Header>

    <Content>
      <Container p={3}>{children}</Container>
    </Content>

    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </Layout>
);

export default MainLayout;
