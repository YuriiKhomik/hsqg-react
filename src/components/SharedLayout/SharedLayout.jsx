import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Box } from 'components/Box';
import { Burger } from 'components/Burger';
import { Menu } from 'components/Navigation';
import { Header } from 'components/Header';

export const SharedLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MediaQuery minWidth={769}>
        <Header />
      </MediaQuery>
      <Box className="sharedLayoutWrapper" p="15px">
        <Box className="mobileNavWrapper">
          <MediaQuery maxWidth={768}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </MediaQuery>
        </Box>
        <Outlet />
      </Box>
    </>
  );
};
