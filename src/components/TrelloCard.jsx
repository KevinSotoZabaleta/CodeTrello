import { Paper } from "@mui/material"
// import { red } from "@mui/material/colors"

const TrelloCard = ({card}) => {
  return (
    // <Paper sx={{margin: 1, backgroundColor: red[500] }}>
    <Paper sx={{margin: 1 }}>
      {card.title}
    </Paper >
  )
}

export default TrelloCard
