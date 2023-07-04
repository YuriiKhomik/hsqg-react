import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './constants/globals';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound/';
import { SharedLayout } from 'components/SharedLayout';
import { Box } from './components/Box';

export const App = () => {
  return (
    <Box className="appWrapper">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
};
