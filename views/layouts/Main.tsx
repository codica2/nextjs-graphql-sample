import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "antd";

import { MeComponent } from "../../generated/apolloComponents";

const { Header, Footer, Content } = Layout;

type Props = {
  title?: string;
};

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
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/login">
          <a>Login</a>
        </Link>{" "}
        |{" "}
        <Link href="/register">
          <a>Register</a>
        </Link>{" "}
        |{" "}
        <Link href="/hello">
          <a>Hello</a>
        </Link>
        |{" "}
        <Link href="/forgot-password">
          <a>Forgot password</a>
        </Link>
        |{" "}
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

    <Content className="l-container">{children}</Content>

    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </Layout>
);

export default MainLayout;
