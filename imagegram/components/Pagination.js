import React, { useState } from "react";
import Link from "next/link";
export default function Pagination({ numberOfBlogs, handlePage }) {
  const pages = [];
  const pageCount = Math.ceil(numberOfBlogs / 6);
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="mb-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <span
              className="page-link white cursor-pointer"
              onClick={() => handlePage("prev")}
            >
              Previous
            </span>
          </li>
          {pages.map((page) => (
            <Link key={page} href={"blogs?page=" + page}>
              <span className="page-link white cursor-pointer">{page}</span>
            </Link>
          ))}
          <li className="page-item">
            <span
              className="page-link white cursor-pointer"
              onClick={() => handlePage("next")}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
