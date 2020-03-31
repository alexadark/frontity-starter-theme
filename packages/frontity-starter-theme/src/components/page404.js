/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";

const Page404 = () => (
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
          404
        </h1>
        <h2
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            color: "secondary"
          }}
        >
          Page Not Found!
        </h2>
      </Box>
    </Flex>
  </Container>
);
export default Page404;
