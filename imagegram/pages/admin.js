import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Link from "next/link";
import styles from "../styles/Admin.module.css";
import moment from "moment";

export default function admin() {
  const [blogs, setBlogs] = useState();

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:5000/blogs");
    setBlogs(data.blogs);
  }, []);

  return (
    <div className={`mt-5 ${styles.admin}`}>
      <Head>
        <title>Admin</title>
      </Head>

      <ul className={`list-group ${styles.ul}`}>
        {blogs ? (
          blogs.map((blog) => (
            <li
              key={blog._id}
              className={`list-group-item d-flex justify-content-between ${styles.list}`}
            >
              <span>{blog.title}</span>
              <span>{moment(blog.createdAt).fromNow()}</span>
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>
      <div className={`${styles.toright}`}>
        <Link href="/admin/createblog">
          <button className={`btn btn-primary ${styles.brbtn}`}>
            Create new blog
          </button>
        </Link>
      </div>
    </div>
  );
}
