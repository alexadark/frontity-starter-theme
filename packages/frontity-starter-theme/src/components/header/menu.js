/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { connect } from "frontity";
import Link from "../link";

const Menu = ({ state, direction, ...props }) => {
  const menuItems = state.theme.menu;

  return (
    <Flex as="nav" {...props}>
      {menuItems.map(([name, link]) => {
        const isCurrentPage = state.router.link === link;
        return (
          <Link
            key={name}
            link={link}
            className="menu-item"
            aria-current={isCurrentPage ? "page" : undefined}
            sx={{ fontWeight: 500 }}
          >
            {name}
          </Link>
        );
      })}
    </Flex>
  );
};

export default connect(Menu);
