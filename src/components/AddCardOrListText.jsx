import { IconButton, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';

const AddCardOrListText = ({type, setOpen}) => {

  const [title, setTitle] = useState("");

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: 'auto', boxShadow: 2, borderRadius: 2 }}>
      <TextField
        label={type === "card" ? "Title for this card" : "Enter list title"}
        onBlur={() => setOpen(false)} 
        variant="outlined"
        value={title}
        onChange={e => setTitle(e.target.value)}
        multiline
        fullWidth
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button variant="contained" color="success" sx={{ flexGrow: 1, mr: 1 }}>
          {type === "card" ? "Add card" : "Add List"}
        </Button>
        <IconButton aria-label="clear" onClick={() => setOpen(false)} >
          <ClearIcon />
        </IconButton>
        <IconButton aria-label="more" >
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddCardOrListText;
