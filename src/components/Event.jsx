import React from "react";
import PropTypes from "prop-types";
import { Center, Flex, Image, Text, Badge } from "@chakra-ui/react";
import { Header } from "./Header";
import { Title } from "./Title";

export const Event = ({ event, category, users }) => {
  const userId = users.find((id) => {
    return id.id === event.createdBy;
  });

  return (
    <>
      <Center display="flex" flexDir="column">
        <Header title={event.title} />

        <Flex display="flex" flexDir="column">
          <Flex
            flexDir={{ base: "column", md: "column", lg: "row" }}
            columnGap={5}
            m={{ base: "10px", md: "20px" }}
            mb="20px"
            backgroundColor="gray.100"
            borderRadius={30}
          >
            <Image
              src={event.image}
              alt={event.title}
              width={{ base: "auto" }}
              height="auto"
              borderRadius="30px"
            />
            <Flex flexDir="column" ml="5px" mt="20px" p="20px">
              <Flex flexDir="column">
                <Title title={"Event description:"} />
                {/* Text description of the event */}
                <Text
                  color="rgb(30, 30, 30)"
                  fontSize={{ base: "18px", md: "18px", xl: "20px" }}
                  mb={{ base: "10px", md: "45px" }}
                >
                  {event.description}
                </Text>
                <Title title={"Event location:"} />
                {/* Text location of the event */}
                <Text
                  color="rgb(30, 30, 30)"
                  fontSize={{ base: "18px", md: "18px", xl: "20px" }}
                  mb={{ base: "10px", md: "15px" }}
                >
                  {event.location}
                </Text>
              </Flex>
              <hr />
              <Flex flexDirection="column" mt="20px" mb="20px" rowGap={2}>
                <Text
                  color="rgb(30, 30, 30)"
                  fontSize={{ md: "18px", xl: "20px" }}
                >
                  Start Time: {event.startTime.substring(0, 10)}{" "}
                  {event.startTime.substring(11, 16)}
                </Text>
                <Text
                  color="rgb(30, 30, 30)"
                  fontSize={{ md: "18px", xl: "20px" }}
                >
                  End Time: {event.endTime.substring(0, 10)}{" "}
                  {event.endTime.substring(11, 16)}
                </Text>
              </Flex>
              <hr />
              <Flex flexDir="column" mb="10px" mt="20px">
                <Title title={"Category"} />
                <Flex columnGap={5}>
                  {event.categoryIds.map((id) => {
                    return (
                      <Badge
                        key={id}
                        mt="10px"
                        p="10px"
                        backgroundColor="rgb(0, 51, 255)"
                        borderRadius="10px"
                        width={{ base: "auto", md: "auto", xl: "auto" }}
                        height="auto"
                        textAlign="center"
                        color="white"
                        fontSize={{ xl: "15px" }}
                        textTransform="none"
                      >
                        {category.find((category) => category.id === id)?.name}
                      </Badge>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mt="1em">
            <Title title={"Event created by:"} />
            <Image
              src={userId.image}
              alt={userId.name}
              width="auto"
              mt="1em"
              mb="1em"
              height="90px"
              borderRadius={{ base: "80px", md: "100px", xl: "150px" }}
            />
            <Text
              color="rgb(30, 30, 30)"
              fontSize={{ base: "20px", md: "30px", xl: "22px" }}
            >
              {userId.name}
            </Text>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

// Expected prop data types
Event.propTypes = {
  events: PropTypes.array,
  category: PropTypes.array,
  title: PropTypes.string,
  id: PropTypes.number,
  event: PropTypes.object,
  users: PropTypes.array,
};
