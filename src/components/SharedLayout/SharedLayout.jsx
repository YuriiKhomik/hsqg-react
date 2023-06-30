import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import donutImage from 'images/donut.png';
import donutImage2 from 'images/donut2.png';
import { Box } from 'components/Box';
import { Burger } from 'components/Burger';
import { Menu } from 'components/Navigation';
import { DonutBottom, DonutTop } from 'components/Donut';

export const SharedLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box p="15px">
      <Box>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Box>
      <DonutBottom src={donutImage} />
      <DonutTop src={donutImage2} />
      <Outlet />
    </Box>
  );
};
