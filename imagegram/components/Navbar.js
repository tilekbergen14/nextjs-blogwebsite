import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/blogs/">
        Blogs
      </Link>
      <Link className={styles.link} href="/staticblogs/">
        Static blogs
      </Link>
      <Link className={styles.link} href="/search/">
        Search
      </Link>
      <Link className={styles.link} href="/admin/">
        Admin
      </Link>
    </ul>
  );
}
