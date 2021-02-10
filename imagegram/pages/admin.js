import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import styles from "../styles/Admin.module.css";

export default function admin() {
  const [blogs, setBlogs] = useState();

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:5000/blogs");
    setBlogs(data);
  }, []);

  return (
    <div className={`mt-5 ${styles.admin}`}>
      <Head>
        <title>Admin</title>
      </Head>

      <ul className={`list-group ${styles.ul}`}>
        {blogs ? (
          blogs.map((blog) => (
            <li className={`list-group-item ${styles.list}`}>{blog.title}</li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>
      <div className={`${styles.toright}`}>
        <button className={`btn btn-primary ${styles.brbtn}`}>
          Create new blog
        </button>
      </div>
    </div>
  );
}
