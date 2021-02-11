import React from "react";
import Image from "next/image";

export default function Blog({ blog }) {
  const { title, img, createdAt } = blog;
  return (
    <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={img ? img : "/moon.jpg"}
        width={"100%"}
        height={190}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ height: 100 }}>
          {title}
        </h5>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
