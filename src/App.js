import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './constants/globals';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound/';
import { Box } from './components/Box';
import { useState } from 'react';

export const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box p="15px">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home open={open} setOpen={setOpen} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};
