import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import donutImage from 'images/donut.png';
import donutImage2 from 'images/donut2.png';
import { Box } from 'components/Box';
import { Burger } from 'components/Burger';
import { Menu } from 'components/Navigation';
import { DonutBottom, DonutTop } from 'components/Donut';
import { Header } from 'components/Header';

export const SharedLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MediaQuery minWidth={769}>
        <Header />
      </MediaQuery>
      <Box p="15px">
        <Box>
          <MediaQuery maxWidth={768}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </MediaQuery>
        </Box>
        <DonutBottom src={donutImage} />
        <DonutTop src={donutImage2} />
        <Outlet />
      </Box>
    </>
  );
};
