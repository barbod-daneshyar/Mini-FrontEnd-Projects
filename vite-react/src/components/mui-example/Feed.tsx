import { Box, Stack } from "@mui/material";
import Post from "./componenet/Post";

function Feed() {
  return (
    // Todo a loading for feed section
    <Box flex={5}>
      <Stack
        sx={{
          margin: { xs: 0, md: "3rem 0" },
          flexDirection: "column",
          gap: { xs: 0, sm: 2 },
          border: "none",
          alignItems: "center",
        }}
      >
        {/* Ugly */}
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </Box>
  );
}

export default Feed;
