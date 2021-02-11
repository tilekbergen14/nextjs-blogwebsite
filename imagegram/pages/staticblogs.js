import Head from "next/head";
import React, { useState, useEffect } from "react";
import Blog from "../components/Blog";
import axios from "axios";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";

export default function blogs({ blogs }) {
  const router = useRouter();
  const handlePage = async (page) => {
    if (page === "prev" && parseInt(router.query.page) > 1)
      router.push("blogs?page=" + (router.query.page - 1));
    if (
      page === "next" &&
      parseInt(router.query.page) < Math.ceil(blogs.numberOfBlogs / 6)
    )
      router.push("blogs?page=" + (parseInt(router.query.page) + 1));
  };

  return (
    <div className="mt-5">
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="d-flex flex-wrap justify-content-center">
        {blogs ? (
          blogs.blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
        ) : (
          <Spinner />
        )}
      </div>
      <Pagination
        numberOfBlogs={blogs && blogs.numberOfBlogs}
        handlePage={handlePage}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  let res;
  if (context.query) {
    res = await axios.get(
      "http://localhost:5000/blogs?page=" + context.query.page
    );
  } else {
    res = await axios.get("http://localhost:5000/blogs/");
  }
  return { props: { blogs: res.data } };
}
