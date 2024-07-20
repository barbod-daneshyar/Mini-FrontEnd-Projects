import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { theme } from "./theme";
import { useState } from "react";

const CustomToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
const CustomSearchBox = styled(Box)(() => ({
  flex: 2,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
}));
const CustomLogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { flex: 1 },
  [theme.breakpoints.up("sm")]: { flex: 2 },
}));
const CustomMenuBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { flex: 1 },
  [theme.breakpoints.up("sm")]: { flex: 2 },
  textAlign: "end",
}));
const CustomMenuItems = styled(Box)(
  ({
    theme: {
      breakpoints: { down, up },
    },
  }) => ({
    [down("md")]: { display: "none" },
    [up("md")]: { display: "flex" },
    gap: 15,
    justifyContent: "end",
    alignItems: "center",
  })
);

const myAvatarProps = { alt: "Iman ZK", src: "/static/profile/1.jpg" };

const CustomAvatar = styled(Avatar)(
  ({
    theme: {
      breakpoints: { down, up },
      spacing,
    },
  }) => ({
    [down("md")]: { width: spacing(4), height: spacing(4) },
    [up("md")]: { width: spacing(4.5), height: spacing(4.5) },
    [up("lg")]: { width: spacing(5), height: spacing(5), margin: "1rem 0" },
    cursor: "pointer",
  })
);

const CustomAvatarBox = styled(Box)(
  ({
    theme: {
      breakpoints: { up },
    },
  }) => ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: 10,
    [up("md")]: { display: "none" },
  })
);

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <CustomLogoBox>
          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", sm: "inline", flex: { xs: 1, sm: 2 } },
            }}
          >
            Telegram
          </Typography>
          <TelegramIcon
            sx={{
              display: { xs: "inline", sm: "none" },
              flex: { xs: 1, sm: 2 },
            }}
          />
        </CustomLogoBox>

        <CustomSearchBox bgcolor="background.default" color="text.primary">
          <SearchIcon
            sx={{ marginLeft: 1, display: { xs: "none", sm: "inline" } }}
          />
          <InputBase
            placeholder="search..."
            sx={{
              flex: 1,
              padding: "0 .3rem",
            }}
          />
        </CustomSearchBox>

        <CustomMenuBox>
          <CustomAvatarBox>
            <Avatar
              onClick={() => setOpen(true)}
              {...myAvatarProps}
              sx={{
                cursor: "pointer",
                width: theme.spacing(3.5),
                height: theme.spacing(3.5),
              }}
            />
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="subtitle1"
            >
              Iman
            </Typography>
          </CustomAvatarBox>
          <CustomMenuItems>
            <Badge sx={{ cursor: "pointer" }} badgeContent={4} color="error">
              <MailIcon
                sx={{
                  fontSize: theme.iconSize,
                }}
              />
            </Badge>
            <Badge sx={{ cursor: "pointer" }} badgeContent={4} color="error">
              <NotificationsIcon
                sx={{
                  fontSize: theme.iconSize,
                }}
              />
            </Badge>
            <CustomAvatar onClick={() => setOpen(true)} {...myAvatarProps} />
          </CustomMenuItems>
        </CustomMenuBox>
      </CustomToolbar>

      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My acount</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
