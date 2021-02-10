import React from "react";

export default function Blog() {
  return (
    <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
      <img className="card-img-top" src="/moon.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
