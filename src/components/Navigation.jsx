import React from "react";
import { Button, Center } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  // full page reload home button
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Center
      mt="20px"
      display="flex"
      flexDirection="row"
      m={{ base: "15px", md: "30px" }}
      spacing="15px"
      fontSize={{ base: "18px", md: "25px" }}
      color="white"
      fontWeight="bold"
    >
      <nav>
        <Button
          m="1em"
          onClick={location.pathname === "/" ? handleReload : undefined}
          background="rgb(30, 30, 30)"
          _hover={{ background: "rgb(60, 60, 60)" }}
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          background="rgb(30, 30, 30)"
          _hover={{ background: "rgb(60, 60, 60)" }}
        >
          <Link to="/addevents/">Add Event</Link>
        </Button>
      </nav>
    </Center>
  );
};
