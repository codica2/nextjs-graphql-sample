import * as React from "react";
import Link from "next/link";
import Typography from "antd/lib/typography";

import Layout from "layouts/Main";
import Title from "styled/Title";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Title>About</Title>
    <Typography.Paragraph strong>This is the about page</Typography.Paragraph>

    <Link href="/">
      <a>Go home</a>
    </Link>
  </Layout>
);

export default AboutPage;
