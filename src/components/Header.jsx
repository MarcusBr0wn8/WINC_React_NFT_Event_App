import React from "react";
import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Header = ({ title }) => {
  return (
    <Heading
      textAlign="center"
      mb="20px"
      mt="30px"
      color="rgb(30, 30, 30)"
      fontSize={{ base: "2em", md: "2.5em", xl: "3em" }}
      fontFamily={"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;"}
    >
      {title}
    </Heading>
  );
};

// Expected prop data types
Header.propTypes = {
  title: PropTypes.string,
};
