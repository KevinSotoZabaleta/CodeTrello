import { Paper, CssBaseline, styled } from "@mui/material";

import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardorList";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "300px",
  background: "#ebecf0",
  margin: theme.spacing(1),
}));

const TrelloList = () => {
  return (
    <StyledPaper>
      <CssBaseline />
      <ListTitle />
      <TrelloCard />
      <TrelloCard />
      <AddCardorList />
    </StyledPaper>
  );
};

export default TrelloList;
