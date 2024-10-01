import { Typography, Box, TextField, InputBase } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from "react";

const ListTitle = () => {

  const [open, setOpen] = useState(true)
  const [newTitle, setNewTitle] = useState("Pendiente")

  return (
    <>
      {open ? (<InputBase 
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                autoFocus
                fullWidth
      
      />) 
      : 
      (<Box display="flex" justifyContent="space-between" alignItems="center">

        <Typography>
          <h2>To Do</h2>
        </Typography>
        <MoreHorizIcon />
      </Box>)}
    </>
  );
};

export default ListTitle;
