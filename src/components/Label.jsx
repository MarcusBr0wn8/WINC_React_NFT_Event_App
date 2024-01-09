import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Input } from "@chakra-ui/react";

export const Label = ({ title, name, value, onChange }) => {
  return (
    <FormLabel mb="20px" fontSize="18px" color="rgb(30, 30, 30)">
      {title}
      <Input
        name={name}
        value={value}
        onChange={onChange}
        mt="10px"
        backgroundColor="white"
        focusBorderColor="rgb(0, 51, 255)"
      />
    </FormLabel>
  );
};

// Expected prop data types
Label.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
