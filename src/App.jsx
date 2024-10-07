import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import ContextAPI from './contextAPI';
import TrelloList from './components/TrelloList';
import AddCardorList from './components/AddCardorList';
import mockData from './mockdata';
import uuid from 'react-uuid';


function App() {

  const [data, setData] = useState(mockData)

  const updateListTitle = (listId, newTitle) => {
    const list = data.lists[listId]
    list.title = newTitle
    //desestructurar el objeto list
    setData({...data, lists: {...data.lists, [listId]: list}})
  }

  /** AÑADIR NUEVA CARD/TARJETA A UNA LISTA */
  const addCard = (title, listId) => {
    //crear id unico para cada tarjeta
    const newCardId = uuid()

    //crear nueva tarjeta
    const newCard = {
      id: newCardId,
      title: title,
    }
    //añadir el newCard a la lista de cards
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]

    //desestructurar el objeto list
    setData({...data, lists: {...data.lists, [listId]: list}})
  }

  /** AÑADIR NUEVA LISTA */
  const addList = (title) => {
    const newListId = uuid()
    const newList = {
      id: newListId,
      title: title,
      cards: []
    }
    //añadir el newList a la lista de listas
    data.lists[newListId] = newList
    //añadir el newListId a la lista de listas
    data.listIds = [...data.listIds, newListId]
    setData({...data})
  }

  return (
  
    <ContextAPI.Provider value={{updateListTitle, addCard, addList}}> 
    
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
