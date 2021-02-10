import Head from "next/head";
import React, { useState } from "react";
import Blog from "../components/Blog";
import axios from "axios";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

export default function blogs({ blogs }) {
  return (
    <div className="mt-5">
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="d-flex flex-wrap justify-content-center">
        {blogs ? (
          blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
        ) : (
          <Spinner />
        )}
      </div>
      <Pagination />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:5000/blogs/");
    return { props: { blogs: res.data } };
  } catch (err) {
    return { props: { blogs: null } };
  }
};
