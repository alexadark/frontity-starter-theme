/** @jsx jsx */
import { jsx, Close, Box } from "theme-ui";
import { Search } from "grommet-icons";
import { Layer, Button } from "grommet";
import { connect } from "frontity";
import SearchForm from "./searchForm";

const SearchModal = ({ state, actions, ...props }) => {
  // Get the state of the search modal
  const { isSearchModalOpen } = state.theme;
  const { openSearchModal, closeSearchModal } = actions.theme;

  return (
    <div>
      <Box
        aria-label="Open modal search"
        onClick={openSearchModal}
        sx={{
          p: 0,
          pl: 10,
          svg: { stroke: "yellow", width: 22, height: 20 },
          borderLeft: "1px solid ",
          borderColor: "yellow",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        className={
          isSearchModalOpen ? "btn-search-opened" : "btn-search-closing"
        }
        {...props}
      >
        <Search />
      </Box>
      {isSearchModalOpen && (
        <Layer
          position="top"
          full="horizontal"
          modal
          responsive={false}
          onClickOutside={closeSearchModal}
          onEsc={closeSearchModal}
          sx={{ ...styles }}
        >
          <div
            sx={{
              pointer: `cursor`,
            }}
            className="close"
            onClick={closeSearchModal}
          >
            <Close />
          </div>
          <div className="search">
            <SearchForm />
          </div>
        </Layer>
      )}
    </div>
  );
};

export default connect(SearchModal);

const styles = {
  position: "relative",
  bg: "background",
  borderRadius: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 100,
  boxShadow: "default",
  ".close": {
    position: "absolute",
    right: 10,
    top: 10,
    svg: {
      fill: "text",
      cursor: "pointer",
    },
  },
};
