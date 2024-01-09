import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Flex, Heading, Image, Box, Badge, Text } from "@chakra-ui/react";

export const Events = ({ events, category }) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      wrap="wrap"
      basis="40px"
      grow="1"
      shrink="0"
      columnGap={{ base: "2", sm: "2", md: "4", lg: "8" }}
      m="30px"
      justify="center"
    >
      {events.map((event) => {
        return (
          <Flex
            backgroundColor="gray.100"
            flexDirection={{ base: "column" }}
            marginBottom="30px"
            borderTopRadius="20px"
            borderBottomRadius="20px"
            maxWidth="300px"
            flexBasis="300px"
            grow="1"
            shrink="0"
            _hover={{ boxShadow: "0 20px 40px rgba(33,33,33,0.25)" }}
            transition="box-shadow .3s"
            key={event.id}
          >
            <Link to={`/event/${event.id}`}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                rowGap={2}
              >
                <Image
                  src={event.image}
                  alt=""
                  width="auto"
                  height={300}
                  borderTopRadius="20px"
                  mb="10px"
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  p="1em"
                >
                  <Heading
                    fontSize="18px"
                    fontWeight="bold"
                    color="rgb(30, 30, 30)"
                    textAlign={"center"}
                  >
                    {event.title}
                  </Heading>

                  <Text
                    color="rgb(30, 30, 30)"
                    fontWeight="regular"
                    fontSize="15px"
                    m="10px"
                    textAlign={"center"}
                  >
                    {event.description}
                  </Text>
                  <Text color="rgb(30, 30, 30)" fontWeight="semibold" mb="10px">
                    {event.location}
                  </Text>
                  <Box color="rgb(30, 30, 30)">
                    Start Time: {event.startTime.substring(0, 10)}{" "}
                    {event.startTime.substring(11, 16)}
                  </Box>
                  <Box color="rgb(30, 30, 30)">
                    End Time: {event.endTime.substring(0, 10)}{" "}
                    {event.endTime.substring(11, 16)}
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    columnGap="10px"
                    mb="10px"
                    mt="5px"
                  >
                    {event.categoryIds.map((id) => {
                      return (
                        <Badge
                          key={id}
                          mt={{ base: "20px" }}
                          p="10px"
                          color="white"
                          backgroundColor="rgb(0, 51, 255)"
                          borderRadius="10px"
                          textTransform="none"
                          _hover={{ background: "rgb(11, 19, 189)" }}
                        >
                          {
                            category.find((category) => category.id === id)
                              ?.name
                          }
                        </Badge>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

// Expected prop data types
Events.propTypes = {
  events: PropTypes.array,
  category: PropTypes.array,
  title: PropTypes.string,
  id: PropTypes.number,
  event: PropTypes.object,
};
