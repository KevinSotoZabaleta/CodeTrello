import { Typography, Box, TextField, InputBase } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useContext } from "react";
import ContextAPI from "../contextAPI";

const ListTitle = ({title, listId}) => {

  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const {updateListTitle} = useContext(ContextAPI)

  const handlerBlur = () => {
    // Update the title
    updateListTitle(listId, newTitle)
    setOpen(false)
  }

  return (
    <>
      {open ? (<InputBase 
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                autoFocus
                fullWidth
                onBlur={handlerBlur}
      />) 
      : 
      (<Box display="flex" justifyContent="space-between" alignItems="center">

        <Typography onClick={() => setOpen(true)} variant="h6" sx={{ cursor: "pointer" }}>
          {title}
        </Typography>
        <MoreHorizIcon />
      </Box>)}
    </>
  );
};

export default ListTitle;
