import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import ConversationList from "./componenet/ConversationList";

function RightBar() {
  return (
    // Optimize rightbar for less than md size
    <Box
      flex={3}
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        marginLeft: 5,
        marginTop: 2,
        alignItems: "left",
      }}
      fontFamily="Roboto, sans-serif"
    >
      <Stack
        sx={{
          position: "sticky",
          top: { sm: "5rem", md: "5rem", lg: "5.5rem" },
        }}
      >
        <Stack>
          <Typography variant="h6" fontWeight={10}>
            Online Friends
          </Typography>
          <AvatarGroup sx={{ justifyContent: "start" }} max={7} total={10}>
            <Avatar alt="Remy Sharp" src="/static/online-friends/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/online-friends/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/online-friends/3.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/online-friends/4.jpg" />
            <Avatar alt="Sharp" src="/static/online-friends/5.jpg" />
          </AvatarGroup>
        </Stack>
        <Stack sx={{ marginTop: 2, marginBottom: 2 }}>
          <Typography variant="h6" fontWeight={10}>
            Latest Photos
          </Typography>
          <ImageList
            sx={{ width: 310, minHeight: 100, flexDirection: "row" }}
            cols={3}
            rowHeight={50}
          >
            <ImageListItem sx={{ width: 100, height: 100 }}>
              <img src="https://picsum.photos/100/100" alt="A" loading="lazy" />
            </ImageListItem>
            <ImageListItem sx={{ width: 100, height: 100 }}>
              <img src="https://picsum.photos/199/199" alt="B" loading="lazy" />
            </ImageListItem>
            <ImageListItem sx={{ width: 100, height: 100 }}>
              <img src="https://picsum.photos/198/198" alt="C" loading="lazy" />
            </ImageListItem>
          </ImageList>
        </Stack>
        <Stack>
          <Typography variant="h6" fontWeight={10}>
            Latest Conversations
          </Typography>
          {/* Ugly */}
          <ConversationList />
        </Stack>
      </Stack>
    </Box>
  );
}

export default RightBar;
