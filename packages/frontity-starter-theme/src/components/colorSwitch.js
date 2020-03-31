/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import { Icon } from "react-icons-kit";
import { iosSunny as sun } from "react-icons-kit/ionicons/iosSunny";
import { iosMoon as moon } from "react-icons-kit/ionicons/iosMoon";
import Switch from "@frontity/components/switch";

const ColorSwitch = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode("dark");

  return (
    <Box
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      {...props}
    >
      <Box sx={{ color: "light", mt: -7, cursor: "pointer" }}>
        <Switch>
          <Icon size={36} icon={sun} when={colorMode === "dark"} />
          <Icon size={36} icon={moon} />
        </Switch>
      </Box>
    </Box>
  );
};

export default ColorSwitch;
