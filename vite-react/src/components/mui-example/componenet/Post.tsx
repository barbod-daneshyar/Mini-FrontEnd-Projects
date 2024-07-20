import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox, IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Post() {
  const [like, setLike] = useState(false);
  const doubleClickHandler = () => {
    setLike(true);
  };
  return (
    <Card
      sx={{
        boxShadow: {
          xs: "none",
          md: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px , rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 1px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
        },
        ":not(:last-child)": { borderBottom: { xs: "1px solid #999", md: 0 } },
        borderRadius: { xs: 0, md: 1.5 },
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image="https://picsum.photos/400/200"
        sx={{ maxHeight: "25rem", objectFit: "contain", backgroundColor: "" }}
        alt="post"
        onDoubleClick={doubleClickHandler}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ marginRight: -0.75 }}>
          <Checkbox
            color="error"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={like}
            onClick={() => setLike((prev) => !prev)}
          />
        </IconButton>
        <IconButton>
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
