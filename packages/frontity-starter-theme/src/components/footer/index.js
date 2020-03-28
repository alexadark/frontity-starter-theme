/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import SocialShare from "../socialShare";
import { connect } from "frontity";

const Footer = ({ state }) => {
  return (
    <footer sx={{ variant: "footer" }}>
      <Container>
        <p>&copy; {new Date().getFullYear()} frontity</p>
        {state.theme.showSocialLinks.footer && <SocialShare />}
      </Container>
    </footer>
  );
};

export default connect(Footer);
