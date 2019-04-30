import React from "react";
import Link from "next/link";

import Layout from "@views/layouts/Main";
import { Heading, Paragraph, NavLink } from "@views/styled";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading>About</Heading>

    <Paragraph>This is the about page</Paragraph>

    <Link href="/">
      <NavLink>Go home</NavLink>
    </Link>
  </Layout>
);

export default AboutPage;
