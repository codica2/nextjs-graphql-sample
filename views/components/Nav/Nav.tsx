import React from "react";
import Link from "next/link";

type Props = {
  items: Array<{ label: string; link: string }>;
};

const Nav: React.FC<Props> = ({ items }) => (
  <nav>
    {items.map(({ label, link }) => (
      <Link key={label} href={link}>
        <a style={{ margin: "0 10px" }}>{label}</a>
      </Link>
    ))}
  </nav>
);

export default Nav;
