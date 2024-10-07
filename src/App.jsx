import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import TrelloList from './components/TrelloList';
import AddCardorList from './components/AddCardorList';
import mockData from './mockdata';
import ContextAPI from './contextAPI';


function App() {

  const [data, setData] = useState(mockData)

  const updateListTitle = (listId, newTitle) => {
    const list = data.lists[listId]
    list.title = newTitle
    setData({...data, lists: {...data.lists, [listId]: list}})
  }

  return (
  
    <ContextAPI.Provider value={{updateListTitle}}> 
    
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

          

          <AddCardorList type="list"/>

        </Stack>
      </Box>
    </ContextAPI.Provider>
  );
}

export default App;
