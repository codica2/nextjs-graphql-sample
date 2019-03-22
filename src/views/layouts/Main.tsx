import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "antd";

import { MeComponent } from "generated/apolloComponents";
import Container from "../styled/Container";

const { Header, Footer, Content } = Layout;

type Props = {
  title?: string;
};

const nav = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "Login",
    link: "/login"
  },
  {
    label: "Register",
    link: "/register"
  },
  {
    label: "hello",
    link: "/hello"
  },
  {
    label: "Forgot password",
    link: "/forgot-password"
  }
];

const MainLayout: React.FunctionComponent<Props> = ({
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
      <nav>
        {nav.map(({ label, link }) => (
          <Link key={label} href={link}>
            <a style={{ margin: "0 10px" }}>{label}</a>
          </Link>
        ))}

        <MeComponent>
          {({ data, loading }) => {
            if (!data || loading || !data.me) {
              return null;
            }

            return (
              <Link href="/logout">
                <a>logout</a>
              </Link>
            );
          }}
        </MeComponent>
      </nav>
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
