// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Input } from "@chakra-ui/react";

export const DateTime = ({ title, name, value, onChange }) => {
  return (
    <FormLabel mb="20px" fontSize="16px" color="rgb(30, 30, 30)">
      {title}
      <Input
        type="datetime-local"
        name={name}
        value={value}
        onChange={onChange}
        mt="10px"
        backgroundColor="white"
        focusBorderColor="rgb(0, 51, 255)"
        required
      />
    </FormLabel>
  );
};

// Expected prop data types
DateTime.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
};
