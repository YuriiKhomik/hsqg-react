import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import donutImage from 'images/donut.png';
import donutImage2 from 'images/donut2.png';
import { Box } from 'components/Box';
import { Burger } from 'components/Burger';
import { Menu } from 'components/Navigation';
import { Donut } from 'pages/Home/Home.styled';
import { Donut2 } from 'pages/Home/Home.styled';

export const SharedLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box p="15px">
      <Box>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Box>
      <Donut src={donutImage} />
      <Donut2 src={donutImage2} />
      <Outlet />
    </Box>
  );
};
