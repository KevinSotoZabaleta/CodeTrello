import { Collapse } from "@mui/material"
import { useState } from "react"

const AddCardorList = () => {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Collapse in={open}>
        <h2>Sirve </h2>
      </Collapse>

      <Collapse in={!open}>
        <h2>no sirve</h2>
      </Collapse>
    </div>
  )
}

export default AddCardorList
