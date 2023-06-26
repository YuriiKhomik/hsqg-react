import { Routes, Route } from 'react-router-dom';
import { Box } from './components/Box/';
import { GlobalStyle } from './constants/globals';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

export const App = () => {
  console.log('azazaz');
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
