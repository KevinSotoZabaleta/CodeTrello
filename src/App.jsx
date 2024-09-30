import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import TrelloList from './components/TrelloList';
import AddCardorList from './components/AddCardorList';
import mockData from './mockdata';


function App() {

  const [data, setData] = useState(mockData)
// console.log(mockData);


  return (
    <Box
      sx={{
        display: 'flex',
        overflowY: 'auto',  // Habilita el scroll horizontal
        whiteSpace: 'nowrap', // Impide que los elementos se ajusten en filas
      }}
    >
      <Stack direction="row" spacing={2}>
        {/* Cada TrelloList ocupará un espacio fijo */}
        
        {data.listIds.map(listID => {

            const list = data.lists[listID]
            return <TrelloList  list={list} key={listID}/>  
          })
        }

        {/* <Box sx={{ minWidth: '10%' }}> 10% para que se muestren 4 por pantalla
          <TrelloList />
        </Box>
         */}
        
        <AddCardorList type="list"/>

      </Stack>
    </Box>
  );
}

export default App;
