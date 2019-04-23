import Typography from "antd/lib/typography";
import Link from "next/link";
import * as React from "react";

import Layout from "@views/layouts/Main";
import Title from "@views/styled/Title";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Title>About</Title>
    <Typography.Paragraph strong={true}>
      This is the about page
    </Typography.Paragraph>

    <Link href="/">
      <a>Go home</a>
    </Link>
  </Layout>
);

export default AboutPage;
