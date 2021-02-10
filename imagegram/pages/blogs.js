import Head from "next/head";
import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import axios from "axios";

export default function blogs() {
  const [blogs, setBlogs] = useState(null);
  useEffect(async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/blogs/");
      setBlogs(data);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="d-flex flex-wrap justify-content-center">
        {blogs && blogs.map((blog) => <Blog />)}
      </div>
    </div>
  );
}
