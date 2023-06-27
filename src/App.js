import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './constants/globals';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound';

export const App = () => {
  console.log('azazaz');
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
