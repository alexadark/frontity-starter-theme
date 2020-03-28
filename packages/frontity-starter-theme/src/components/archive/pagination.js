/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { useEffect } from "react";
import { connect } from "frontity";
import Link from "../link";
import { Nav } from "grommet";
import { getUrlData, buildUrl } from "../../helpers";
import paginationStyles from "../../styles/paginationStyles";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions, libraries }) => {
  // Get the total posts to be displayed based for the current link
  const { totalPages } = getUrlData(state);

  const { path, page, query } = libraries.source.parse(state.router.link);

  // Check if we can go to next page within the pagination
  const isThereNextPage = page < totalPages;

  // Check if we can go to previous page within the pagination
  const isTherePreviousPage = page > 1;

  // Get the link for the next page
  const nextPageLink = buildUrl(libraries, path, page + 1, query);

  // Get the link for the previous page
  const prevPageLink = buildUrl(libraries, path, page - 1, query);
  const isActive = i => state.router.link.includes(i + 1);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);
  if (totalPages <= 1) return;

  return (
    <Container sx={{ ...paginationStyles }}>
      {/* If there's a previous page, render this link */}
      {isTherePreviousPage ? (
        <Link className="prevLink link" link={prevPageLink}>
          <span>Previous</span>
        </Link>
      ) : (
        <span className="prevLink mutted">Previous</span>
      )}

      <Nav direction="row" className="pageNumbers">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              link={i === 0 ? path : buildUrl(libraries, path, i + 1, query)}
              className={isActive(i) ? "active" : null}
            >
              <Flex className="number">{i + 1}</Flex>
            </Link>
          ))}
      </Nav>

      {/* If there's a next page, render this link */}
      {isThereNextPage ? (
        <Link className="nextLink link" link={nextPageLink}>
          <span>Next</span>
        </Link>
      ) : (
        <span className="nextLink mutted">Next</span>
      )}
    </Container>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);
