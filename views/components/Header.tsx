import React from "react";
import Link from "next/link";

import { Container, Flex, NavLink } from "@views/styled";

import { MeComponent } from "@generated/apolloComponents";

interface IProps {
  items: Array<{ label: string; link: string }>;
}

const Header: React.FC<IProps> = ({ items }) => (
  <Container p="0 50px">
    <Flex as="nav" height="50px" alignItems="center">
      {items.map(({ label, link }) => (
        <Link key={label} href={link} passHref={true}>
          <NavLink>{label}</NavLink>
        </Link>
      ))}

      <MeComponent>
        {({ data, loading }) => {
          if (!data || loading || !data.me) {
            return null;
          }

          return (
            <Link href="/logout">
              <NavLink css={{ marginLeft: "auto" }}>Logout</NavLink>
            </Link>
          );
        }}
      </MeComponent>
    </Flex>
  </Container>
);

export default Header;
