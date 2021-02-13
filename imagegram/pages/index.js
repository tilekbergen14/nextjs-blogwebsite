import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import axios from "axios";

export default function Home({ courses }) {
  return (
    <div className="container">
      <Head>
        <title>Homepage</title>
      </Head>

      <Grid container spacing={5} className="mt-5">
        {courses.map((course) => (
          <Grid key={course._id} item xs={12} sm={6}>
            <Link href={`/courses/${course.name}/`}>
              <Grid container className={styles.container}>
                {course.name}
              </Grid>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export const getStaticProps = async () => {
  const result = await axios.get("http://localhost:5000/courses/");
  return {
    props: { courses: result.data },
  };
};
