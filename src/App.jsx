import React from 'react';
import TrelloList from './components/TrelloList';
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowY: 'auto',  // Habilita el scroll horizontal
        whiteSpace: 'nowrap', // Impide que los elementos se ajusten en filas
         // Oculta la barra de desplazamiento
      }}
    >
      <Stack direction="row" spacing={2}>
        {/* Cada TrelloList ocupará un espacio fijo */}
        <Box sx={{ minWidth: '10%' }}> {/* 10% para que se muestren 4 por pantalla */}
          <TrelloList />
        </Box>
        <Box sx={{ minWidth: '10%' }}>
          <TrelloList />
        </Box>
        <Box sx={{ minWidth: '10%' }}>
          <TrelloList />
        </Box>
        <Box sx={{ minWidth: '10%' }}>
          <TrelloList />
        </Box>
        <Box sx={{ minWidth: '10%' }}>
          <TrelloList />
        </Box>
        <Box sx={{ minWidth: '10%' }}>
          <TrelloList />
        </Box>
        <Box sx={{ minWidth: '10%' }}>
          <TrelloList />
        </Box>

      </Stack>
    </Box>
  );
}

export default App;
