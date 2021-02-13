import React from "react";
import styles from "../../../styles/Course.module.css";
import { Grid } from "@material-ui/core";
import Link from "next/link";

export default function course() {
  return (
    <Grid container>
      <Grid item className={styles.horizontalNav}>
        <h4 className={styles.title}>Python tutorial</h4>
        <div>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={(styles.link, styles.active)}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Python Home</p>
          </Link>
        </div>
      </Grid>
      <Grid item className={styles.body}>
        <div className={styles.head}>
          <h4 className={styles.title}>Python tutorial for beginners</h4>
          <Grid container justify="space-around">
            <button className="btn btn-primary">Previous</button>
            <button className="btn btn-primary">Next</button>
          </Grid>
        </div>
        <div className="border-bottom"></div>
      </Grid>
    </Grid>
  );
}
