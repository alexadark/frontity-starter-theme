/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import Link from "../link";

const Taxonomies = ({ tax, name }) => {
  return (
    <div className="taxonomies">
      <span>{name}: </span>
      {tax &&
        tax.map(item => (
          <Button
            variant="primary.gradient.small"
            key={item.id}
            sx={{ mx: 5, mb: 10 }}
          >
            <Link link={item.link}>{item.name}</Link>
          </Button>
        ))}
    </div>
  );
};

export default Taxonomies;
