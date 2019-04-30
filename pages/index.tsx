import React from "react";

import Layout from "@views/layouts/Main";
import { Heading, Paragraph } from "@views/styled";

import { withAuth } from "@utils/withAuth";

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Heading>Home</Heading>

    <Paragraph>This is the home page</Paragraph>
  </Layout>
);

export default withAuth(IndexPage);
