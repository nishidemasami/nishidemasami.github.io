import React from "react";
import { Link } from "gatsby";
import { PAGINATION } from "../../constants";
import {
  pagination,
  paginationPrev,
  paginationPrevLink,
  paginationPrevLinkDisable,
  paginationNext,
  paginationNextLink,
  paginationNextLinkDisable,
} from "./Pagination.module.scss";

type Props = {
  prevPagePath: string;
  nextPagePath: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

function Pagination({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props): JSX.Element {
  return (
    <div className={pagination}>
      <div className={paginationPrev}>
        <Link
          className={
            hasPrevPage ? paginationPrevLink : paginationPrevLinkDisable
          }
          rel="prev"
          to={hasPrevPage ? prevPagePath : "/"}
        >
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className={paginationNext}>
        <Link
          className={
            hasNextPage ? paginationNextLink : paginationNextLinkDisable
          }
          rel="next"
          to={hasNextPage ? nextPagePath : "/"}
        >
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
