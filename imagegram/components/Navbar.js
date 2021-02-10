import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link className={styles.link} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/blogs/">
          Blogs
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/admin/">
          Admin
        </Link>
      </li>
    </ul>
  );
}
