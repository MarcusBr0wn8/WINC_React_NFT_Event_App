import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

export const FilterButton = ({ id, value, onClick, title }) => {
  return (
    <Button
      key={id}
      value={value}
      onClick={onClick}
      color="white"
      background="rgb(0, 51, 255)"
      _hover={{ background: "rgb(11, 19, 189)" }}
    >
      {title}
    </Button>
  );
};

// Expected prop data types
FilterButton.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
