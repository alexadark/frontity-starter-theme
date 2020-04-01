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
  const { totalPages, next, previous } = getUrlData(state);
  const { route, query } = libraries.source.parse(state.router.link);
  const isActive = i => state.router.link.includes(i + 1);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  // Don't use pagination if there's only 1 page.
  if (totalPages <= 1) return null;

  return (
    <Container sx={{ ...paginationStyles }}>
      {/* If there's a previous page, render this link */}
      {previous ? (
        <Link className="prevLink link" link={previous}>
          <span>Previous</span>
        </Link>
      ) : (
        <span className="prevLink mutted">Previous</span>
      )}

      <Nav direction="row" className="pageNumbers">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => {
            return (
              <Link
                key={`pagination-number${i + 1}`}
                link={
                  i === 0 ? route : buildUrl(libraries, route, i + 1, query)
                }
                className={isActive(i) ? "active" : null}
              >
                <Flex className="number">{i + 1}</Flex>
              </Link>
            );
          })}
      </Nav>

      {/* If there's a next page, render this link */}
      {next ? (
        <Link className="nextLink link" link={next}>
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
