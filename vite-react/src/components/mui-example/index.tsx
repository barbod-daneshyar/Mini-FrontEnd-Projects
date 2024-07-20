import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Feed from "./Feed";
import RightBar from "./RightBar";
import Add from "./Add";
import { useState } from "react";

// Todo a redux for intracting information

const HomePage = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Todo a loading for all */}
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          justifyContent="space-between"
          gap={1}
        >
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
