import React from "react";
import Head from "next/head";
import AddBlog from "../components/createblog/AddBlog";

export default function createblog() {
  return (
    <>
      <Head>
        <title>Create Blog</title>
      </Head>
      <div>
        <AddBlog />
      </div>
    </>
  );
}
