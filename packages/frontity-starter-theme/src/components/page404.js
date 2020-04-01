/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import { connect } from "frontity";

const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <Container>
      <Flex
        sx={{ justifyContent: "center", alignItems: "center", height: "100%" }}
      >
        <Box>
          <h1
            sx={{
              p: 20,
              border: `10px double`,
              borderColor: "text",
              textAlign: "center",
              color: "primary"
            }}
          >
            {data.errorStatus || "404"}
          </h1>
          <h2
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              color: "secondary"
            }}
          >
            {data.is404
              ? "Page Not Found!"
              : "Something went wrong. Please try again later."}
          </h2>
        </Box>
      </Flex>
    </Container>
  );
};
export default connect(Page404);
