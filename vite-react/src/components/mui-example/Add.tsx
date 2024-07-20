import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "./componenet/CreatePost";
import { useState } from "react";

function Add() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="New post"
        sx={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
          display: { xs: "none", md: "block" },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      {open && <CreatePost open={open} setOpen={setOpen} />}
    </>
  );
}

export default Add;
