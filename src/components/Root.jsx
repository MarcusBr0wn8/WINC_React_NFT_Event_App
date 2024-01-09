import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  return (
    <Box
      background="white"
      fontFamily="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
      maxWidth="100vw"
      minHeight="100vh"
    >
      <Navigation />
      <Outlet />
      <Footer />
    </Box>
  );
};
