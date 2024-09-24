import { Typography, Box } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ListTitle = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        <h2>To Do</h2>
      </Typography>
      <MoreHorizIcon />
    </Box>
  );
};

export default ListTitle;
