/** @jsx jsx */
import { jsx, Flex, ThemeProvider } from "theme-ui";
import theme from "../theme-ui";
import { Global, connect, Head } from "frontity";
import FontFace from "../styles/fontFace";
import globalStyles from "../styles/globalStyles";
import Header from "./header";
import Footer from "./footer";
import Archive from "./archive";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post";

import { getUrlData } from "../helpers";
import Title from "./title";
import { Grommet } from "grommet";

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = getUrlData(state);
  const { isFetching, isPostType, isArchive, is404 } = data;

  return (
    <Grommet theme={theme}>
      <ThemeProvider theme={theme}>
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>
        <FontFace />
        <Global styles={globalStyles} />
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh"
          }}
        >
          <Header />
          <main
            sx={{
              py: ["xl", "xl", "xxl"]
            }}
          >
            {isFetching && <Loading />}
            {is404 && state.router.link !== "/test/" && <Page404 />}
            {isPostType && <Post />}
            {isArchive && <Archive />}
          </main>
          <Footer />
        </Flex>
      </ThemeProvider>
    </Grommet>
  );
};

export default connect(Theme);
