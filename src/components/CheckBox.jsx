import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Flex, Checkbox } from "@chakra-ui/react";

export const CheckBox = ({ categories, onChange, event, title }) => (
  <FormLabel mb="20px" fontSize="18px" color="rgb(30, 30, 30)">
    {title}
    <Flex mt="10px">
      {categories.map(({ name, id }) => (
        <FormLabel key={id} color="rgb(0, 51, 255)" fontSize="18px">
          {name.charAt(0).toUpperCase() + name.slice(1)}
          <Checkbox
            ml="10px"
            mt="5px"
            backgroundColor="white"
            type="checkbox"
            name={name}
            value={id}
            defaultChecked={event.categoryIds.includes(id)}
            onChange={onChange}
          />
        </FormLabel>
      ))}
    </Flex>
  </FormLabel>
);

// Expected prop data types
CheckBox.propTypes = {
  categories: PropTypes.array,
  event: PropTypes.object,
  title: PropTypes.string,
  onChange: PropTypes.func,
};
