import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useState } from 'react'

const AddCardOrListText = () => {

  const [title, setTitle] = useState("")

  return (
    <>
      <Box sx={{ margin: 1 }}>
        <TextField
          label="Title for this card"
          variant="outlined" value={title}
          onChange={e => setTitle(e.target.value)}
          multiline />
      </Box>
      <div>
        <Button sx={{margin:1}} variant="contained" color="success"> Success </Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </>
    //   <Paper sx={{ margin: 1 }}>
    //     <InputBase
    //       multiline
    //       value={title}
    //       onChange={e => setTitle(e.target.value)}
    //       placeholder='Enter a title for this card' />



    //   </Paper>
  )
}

export default AddCardOrListText
