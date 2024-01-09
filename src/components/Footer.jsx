import React from "react";
import { Text } from "@chakra-ui/react";

const Footer = () => {
  // Added dynamic year
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <Text
        fontSize="14px"
        textAlign="center"
        color="black"
        maxWidth="1000px"
        m="auto"
        pb="4em"
        paddingLeft="5em"
        paddingRight="5em"
      >
        <strong>FOR TESTING PURPOSES ONLY!</strong>
        <br></br>
        This web app is constructed using React, Npm, Vite, Chakra UI, and
        GitHub, exclusively for testing purposes. Please note that all events
        displayed are simulated and cannot be added or deleted. Data is sourced
        from My JSON Server. The NFT images featured are the exclusive property
        of BROWN DESIGN. All rights reserved. © 2023-{year}.
      </Text>
    </footer>
  );
};

export default Footer;
