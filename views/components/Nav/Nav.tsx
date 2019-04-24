import React from "react";
import Link from "next/link";

interface IProps {
  items: Array<{ label: string; link: string }>;
}

const Nav: React.FC<IProps> = ({ items }) => (
  <nav>
    {items.map(({ label, link }) => (
      <Link key={label} href={link}>
        <a style={{ margin: "0 10px" }}>{label}</a>
      </Link>
    ))}
  </nav>
);

export default Nav;
