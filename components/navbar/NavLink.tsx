import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.css";

export type TNavLinkProps = {
  href: string;
  innerContent: string | number | React.ReactNode;
  className?: string;
};

export default function NavLink(props: TNavLinkProps) {
  const { href, innerContent, className } = props;

  return (
    <Link className={className || styles.navLink} href={href}>
      {innerContent}
    </Link>
  );
}
