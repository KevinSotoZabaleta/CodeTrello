import { Collapse, Paper, Typography } from "@mui/material"
import { useState } from "react"
import AddCardOrListText from "./AddCardOrListText"

const AddCardorList = () => {

  const [open, setOpen] = useState(true)

  return (
    <div>
      <Collapse in={open}>
        <AddCardOrListText />
      </Collapse>

      <Collapse in={!open}>
        <Paper sx={{ margin: 1 , cursor: "pointer", "&:hover":{color: "blue"}}}>
          <Typography>
            + Add Card
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default AddCardorList
