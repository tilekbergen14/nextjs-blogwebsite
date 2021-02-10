import React from "react";

export default function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link white"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item white">
            <a className="page-link white" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link white" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link white" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link white" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
