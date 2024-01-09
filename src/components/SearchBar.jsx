import { Input } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

export const SearchBar = ({ onChange }) => {
  return (
    <Input
      backgroundColor="white"
      focusBorderColor="rgb(0, 51, 255)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="10px"
      mb={{ base: "30px", md: "35px" }}
      ml="5px"
      width={{ base: "300px", sm: "400px", md: "600px" }}
      type="text"
      placeholder="Search by event-name, description or location..."
      onChange={onChange}
    />
  );
};

// Expected prop data types
SearchBar.propTypes = {
  onChange: PropTypes.func,
};
