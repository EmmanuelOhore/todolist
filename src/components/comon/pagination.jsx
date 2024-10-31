import React from "react";
import "../../styles/parginate-todo.css";
import _ from "lodash";
const Pagination = (props) => {
  const { listCount, currentPage, onPageChange, pageSize } = props;
  const pageCount = Math.ceil(listCount / pageSize);
  let pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page} className="page-item">
              <a
                onClick={() => onPageChange(page)}
                className={
                  currentPage === page ? "page-link active" : "page-link"
                }
                s
                href="#"
              >
                {page}
              </a>
            </li>
          );
        })}
        {}
      </ul>
    </nav>
  );
};

export default Pagination;
