import React from "react";
import Link from "next/link";

import { Container, Paragraph } from "@views/styled";

const Footer = () => (
  <Container as="footer" p="20px 50px">
    <Paragraph textAlign="center">Im here to stay (Footer)</Paragraph>
  </Container>
);

export default Footer;
