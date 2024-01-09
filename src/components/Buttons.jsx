import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

export const Buttons = ({ title, onClick }) => {
  return (
    <Button
      flexDirection={{ base: "column", lg: "row" }}
      color="white"
      background="rgb(0, 51, 255)"
      mb="10px"
      width={{ base: "250px", xl: "auto" }}
      fontSize={{ xl: "16px" }}
      _hover={{ background: "rgb(11, 19, 189)" }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

// Expected prop data types
Buttons.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
