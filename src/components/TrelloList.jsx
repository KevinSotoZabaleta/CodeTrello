import { Paper, CssBaseline, styled } from "@mui/material";

import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardorList";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "300px",
  background: "#ebecf0",
  margin: theme.spacing(1),
}));

const TrelloList = ({list}) => {

  console.log(list);
  

  return (
    <StyledPaper>
      <CssBaseline />
      <ListTitle />
      {
        list.cards.map(card => (
          <TrelloCard card={card} key={card.id} />
        ))
      }
      <AddCardorList type="card" />
    </StyledPaper>
  );
};

export default TrelloList;
