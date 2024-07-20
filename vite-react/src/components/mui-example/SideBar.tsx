import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import CreatePost from "./componenet/CreatePost";

type Props = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

function SideBar({ mode, setMode }: Props) {
  const [open, setOpen] = useState(false);
  const handleTheme = () => {
    setMode((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* First Condition */}
      <Box
        flex={1.6}
        sx={{
          display: { xs: "none", md: "block" },
          marginTop: 1,
        }}
      >
        <List
          sx={{
            position: "sticky",
            top: { sm: "4.5rem", md: "4.5rem", lg: "5rem" },
          }}
        >
          {/* 1 */}
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
          {/* 2 */}
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
          {/* 3 */}
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          {/* 4 */}
          <ListItemButton>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
          {/* 5 */}
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          {/* 6 */}
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          {/* 7 */}
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          {/* 8 */}
          <ListItemButton onClick={handleTheme}>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch checked={mode == "dark"} />
          </ListItemButton>
        </List>
      </Box>
      {/* Second Condition */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "sticky",
          bottom: 0,
          bgcolor: "background.default",
          padding: 1,
          justifyContent: "space-between",
          zIndex: "1",
          borderTop: "1px #999 solid",
        }}
      >
        <HomeIcon fontSize="large" color="action" sx={{ cursor: "pointer" }} />

        {/* <GroupIcon fontSize="large" color="action" sx={{ cursor: "pointer" }} /> */}

        <StorefrontIcon
          fontSize="large"
          color="action"
          sx={{ cursor: "pointer" }}
        />

        <AddCircleOutlineIcon
          fontSize="large"
          color="action"
          sx={{ cursor: "pointer" }}
          onClick={() => setOpen(true)}
        />

        <PersonIcon
          fontSize="large"
          color="action"
          sx={{ cursor: "pointer" }}
        />

        {/* <SettingsIcon
          fontSize="large"
          color="action"
          sx={{ cursor: "pointer" }}
        /> */}

        {/* <AccountBoxIcon
          fontSize="large"
          color="action"
          sx={{ cursor: "pointer" }}
        /> */}

        <ModeNightIcon
          fontSize="large"
          color="action"
          sx={{ cursor: "pointer" }}
          onClick={handleTheme}
        />
      </Box>
      {open && <CreatePost open={open} setOpen={setOpen} />}
    </>
  );
}

export default SideBar;
