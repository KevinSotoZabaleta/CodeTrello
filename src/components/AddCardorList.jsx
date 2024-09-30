import { Collapse, Paper, Typography } from "@mui/material"
import { useState } from "react"
import AddCardOrListText from "./AddCardOrListText"

const AddCardorList = ({type}) => {

  const [open, setOpen] = useState(true)

  return (
    <div>
      <Collapse in={open}>
        <AddCardOrListText type={type} setOpen={setOpen} />
      </Collapse>

      <Collapse in={!open}>
        <Paper sx={{ margin: 1 , cursor: "pointer", "&:hover":{color: "blue"}}} onClick={() => setOpen(true)} >
          <Typography>
            {type === "card"? "+ Add a card" : "+ Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default AddCardorList
