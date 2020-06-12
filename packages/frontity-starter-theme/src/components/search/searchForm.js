/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef } from "react";
import ScreenReaderText from "../../styles/screenReader";
import { connect } from "frontity";

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  const { closeSearchModal } = actions.theme;
  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;
    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${searchString.toLowerCase()}`);
      // Scroll the page to the top
      window.scrollTo(0, 0);
      // Close the search modal
      closeSearchModal();
    }
  };
  return (
    <form
      role="search"
      aria-label="404 not found"
      onSubmit={handleSubmit}
      sx={{ mx: "auto", width: "100%" }}
    >
      <label>
        <ScreenReaderText>Search for:</ScreenReaderText>
        <input
          type="search"
          defaultValue={searchQuery}
          placeholder="search..."
          ref={inputRef}
          sx={{
            border: "none",
            borderLeft: "5px solid",
            borderColor: "accent",
            py: 20,
            px: 20,
            width: [300, 600, 800],
            bg: "transparent",
            color: "text",
            fontSize: "xl",
            "&:focus": {
              outline: "1px dotted",
            },
          }}
        />
      </label>
    </form>
  );
};

export default connect(SearchForm);

const style = {};
