import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormLabel, Flex } from "@chakra-ui/react";
import { Events } from "./Events";
import { SearchBar } from "./SearchBar";
import { FilterButton } from "./FilterButton";

export const Filter = ({ events, category }) => {
  const [searchField, setSearchField] = useState("");

  const matchedEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchField.toLowerCase()) ||
      event.description.toLowerCase().includes(searchField.toLowerCase()) ||
      event.location.toLowerCase().includes(searchField.toLowerCase()) ||
      event.categoryIds.includes(Number(searchField))
  );

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        wrap: "wrap",
        alignItems: "center",
        justify: "center",
      }}
    >
      <SearchBar onChange={handleChange} />
      <FormLabel
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: { base: "20px" },
          rowGap: 4,
          color: "rgb(30, 30, 30)",
          fontSize: { base: "2em", sm: "1.5em", lg: "2em" },
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        }}
      >
        Filter events:
        <Flex sx={{ display: "flex", flexDirection: "row", columnGap: 5 }}>
          {category.map(({ name, id }) => (
            <FilterButton
              key={id}
              value={id}
              onClick={handleChange}
              title={name.charAt(0).toUpperCase() + name.slice(1)}
            />
          ))}
          <FilterButton
            onClick={() => setSearchField("")}
            title={"Clear filters"}
          />
        </Flex>
      </FormLabel>

      <Events
        events={searchField ? matchedEvents : events}
        category={category}
      />
    </Flex>
  );
};

// Expected prop data types
Filter.propTypes = {
  events: PropTypes.array,
  category: PropTypes.array,
};
