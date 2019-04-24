import React from "react";
import Link from "next/link";

import { Container, Flex, Box, NavLink } from "@views/styled";

import { MeComponent } from "@generated/apolloComponents";

interface IProps {
  items: Array<{ label: string; link: string }>;
}

const Header: React.FC<IProps> = ({ items }) => (
  <Container height="50px" p="0 50px">
    <Flex justifyContent="space-between">
      <Box as="nav" lineHeight="50px">
        {items.map(({ label, link }) => (
          <Link key={label} href={link} passHref={true}>
            <NavLink>{label}</NavLink>
          </Link>
        ))}
      </Box>

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
  </Container>
);

export default Header;
