import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  styled,
  ButtonGroup,
  Button,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const UserBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
}));
const ModalBox = styled(Box)(({ theme: { breakpoints } }) => ({
  [breakpoints.down("sm")]: { width: "90%" },
  [breakpoints.up("sm")]: { width: "60%" },
  [breakpoints.up("lg")]: { width: "30%" },
  display: "flex",
  flexDirection: "column",
  gap: 8,
  borderRadius: 10,
  padding: 30,
}));

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Content = "emoji" | "photo" | "camera" | "person";

const CreatePost = ({ open, setOpen }: Props) => {
  const [content, setContent] = useState<null | Content>(null);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (type: Content) => {
    setContent(type);
  };
  const contentSelected = (type: Content) => {
    if (content === type) return { bgcolor: "#ffcdd2", borderRadius: 1 };
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalBox bgcolor="background.default" color="text.primary">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <CloseIcon
            sx={{ cursor: "pointer" }}
            color="primary"
            onClick={() => {
              setOpen(false);
            }}
          />
          <Typography variant="h6" color="#888683">
            Create post
          </Typography>
        </Box>
        <UserBox>
          {/* Fixme : it has to be changable by store */}
          <Avatar src="/static/profile/1.jpg" sx={{ width: 30, height: 30 }} />
          <Typography variant="subtitle1" fontWeight={1000}>
            Iman ZKAR
          </Typography>
        </UserBox>
        <TextField
          label="Helper text"
          variant="standard"
          multiline
          rows={2}
          placeholder="What's on your mind?"
          color="warning"
        />
        <Stack direction="row" spacing={1} marginTop={0.5}>
          {/* Fix to be interactive */}
          <EmojiEmotionsIcon
            color="primary"
            sx={{
              cursor: "pointer",
              ...contentSelected("emoji"),
            }}
            onClick={() => handleClick("emoji")}
          />
          <InsertPhotoIcon
            color="secondary"
            sx={{ cursor: "pointer", ...contentSelected("photo") }}
            onClick={() => handleClick("photo")}
          />
          <VideoCameraBackIcon
            color="success"
            sx={{ cursor: "pointer", ...contentSelected("camera") }}
            onClick={() => handleClick("camera")}
          />
          <PersonAddIcon
            color="error"
            sx={{ cursor: "pointer", ...contentSelected("person") }}
            onClick={() => handleClick("person")}
          />
        </Stack>
        {/* fix to be operable */}
        <ButtonGroup disableElevation variant="contained" fullWidth>
          <Button sx={{ width: "90%" }}>Post</Button>
          <Button sx={{ width: "10%" }}>
            <DateRangeIcon />
          </Button>
        </ButtonGroup>
      </ModalBox>
    </StyledModal>
  );
};

export default CreatePost;
