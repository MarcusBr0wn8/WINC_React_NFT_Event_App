import { Heading } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
export const Title = ({ title }) => {
  return (
    <Heading
      color="rgb(30, 30, 30)"
      fontSize={{ base: "1.5em", md: "2em", xl: "2.25em" }}
      fontFamily={"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;"}
      mb={{ base: "10px", md: "15px", xl: "5px" }}
    >
      {title}
    </Heading>
  );
};

// Expected prop data types
Title.propTypes = {
  title: PropTypes.string,
};
