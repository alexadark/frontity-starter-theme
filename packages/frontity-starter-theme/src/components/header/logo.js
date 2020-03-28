/** @jsx jsx */
import { jsx } from "theme-ui";
import { connect } from "frontity";
import { isUrl } from "../../helpers";
import Link from "../link";

const Logo = ({ state }) => {
  const { logo } = state.theme;

  return (
    <div className="logo">
      {isUrl(logo) || logo.startsWith("/") ? (
        <Link link="/">
          <img src={logo} alt="logo" sx={{ maxWidth: 50 }} />
        </Link>
      ) : (
        <h1 sx={{ variant: "text.branding" }}>
          <Link link="/">{logo}</Link>
        </h1>
      )}
    </div>
  );
};

export default connect(Logo);
