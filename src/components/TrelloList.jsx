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
      <ListTitle title={list.title} id={list.id} />
      {
        list.cards.map(card => (
          <TrelloCard card={card} key={card.id} />
        ))
      }
      <AddCardorList type="card" listId = {list.id}/>
    </StyledPaper>
  );
};

export default TrelloList;
