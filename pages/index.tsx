import React from "react";

import Typography from "antd/lib/typography";
import Layout from "layouts/Main";
import Title from "styled/Title";

import { withAuth } from "../lib/withAuth";

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Home</Title>
    <Typography.Paragraph strong={true}>This is the home page</Typography.Paragraph>
  </Layout>
);

export default withAuth(IndexPage);
