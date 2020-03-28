/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import { useEffect } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

const ColorSwitch = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode("dark");
  // useEffect(() => {
  //   setColorMode("dark");
  // });

  const Icon =
    colorMode === "dark" ? (
      <FiSun sx={{ width: `24px`, height: `24px`, strokeWidth: 1, mt: -2 }} />
    ) : (
      <FiMoon
        sx={{
          width: `24px`,
          height: `24px`,
          strokeWidth: 1,
          svg: { stroke: `accent`, fill: `accent` },
          mt: -5
        }}
      />
    );
  return (
    <Box
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      {...props}
    >
      {Icon}
    </Box>
  );
};

export default ColorSwitch;
