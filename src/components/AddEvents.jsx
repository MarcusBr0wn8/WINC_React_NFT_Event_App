import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  useToast,
  Input,
  FormLabel,
  Checkbox,
  Select,
  Textarea,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Header } from "./Header";
import { ModalMessages } from "../components/ModalMessages";

// Load data My JSON server
export const loader = async () => {
  const users = await (
    await fetch(
      "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/users"
    )
  ).json();
  const categories = await (
    await fetch(
      "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/categories"
    )
  ).json();

  return [users, categories];
};

export const AddEvents = () => {
  // Load my-jason data
  const [users, categories] = useLoaderData();
  const [isPending, setIsPending] = useState(false);

  // nav
  const history = useNavigate();

  // register form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdd = async (data) => {
    try {
      console.log("Request Payload:", JSON.stringify(data));
      // Make a POST request to the backend
      const response = await fetch(
        "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            createdBy: Number(data.createdBy),
            title: data.title,
            description: data.description,
            image: data.image,
            categoryIds: data.categoryIds.map((id) => parseInt(id)),
            attendedBy: data.attendedBy.map((id) => parseInt(id)),
            location: data.location,
            startTime: data.startTime,
            endTime: data.endTime,
          }),
        }
      );

      console.log("Response:", response);

      if (response.ok) {
        const responseData = await response.json();
        setIsPending(false);
        console.log("Event successfully added:", responseData);
        toast({
          render: ({ onClose }) => (
            <ModalMessages
              title="Add NFT-event"
              description="NFT-event successfully added"
              status="success"
              onClose={() => {
                onClose();
                reset();
              }}
              history={history}
            />
          ),
        });
      } else {
        // error message
        console.error(`Failed to add event. Status: ${response.status}`);
        const errorText = await response.text();
        console.error(`Error response: ${errorText}`);

        toast({
          render: ({ onClose }) => (
            <ModalMessages
              title="Adding the NFT-event wasn't successful"
              description="Sorry, something went wrong!"
              status="error"
              onClose={onClose}
            />
          ),
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setIsPending(false);
    }
  };

  //top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useToast declaration fxor pop up message
  const toast = useToast();

  // add event-form
  return (
    <>
      <Center
        display="flex"
        flexDirection="column"
        m="2rem"
        p="1rem"
        bgColor="gray.100"
        borderRadius="20px"
      >
        <Header title={"Add a new NFT-event"} />
        <form onSubmit={handleSubmit(handleAdd)}>
          <FormLabel
            type="text"
            id="title"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            Your title of the event:
            <Input
              mt="10px"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              type="text"
              {...register("title", { required: true })}
            />
            {errors.title && errors.title.type === "required" && (
              <Text mt="8px" color="red">
                This field is required!
              </Text>
            )}
          </FormLabel>
          <FormLabel
            type="text-area"
            id="description"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            Your event description:
            <Textarea
              mt="10px"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && errors.description.type === "required" && (
              <Text mt="8px" color="red">
                This field is required!
              </Text>
            )}
          </FormLabel>
          <FormLabel
            type="image"
            id="event-image"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            Event image (full URL):
            <Input
              mt="10px"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              type="url"
              {...register("image", { required: true })}
            />
            {errors.image && errors.image.type === "required" && (
              <Text mt="8px" color="red">
                This field is required!
              </Text>
            )}
          </FormLabel>
          <FormLabel
            type="text"
            id="location"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            Event location:
            <Input
              mt="10px"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              type="text"
              {...register("location", { required: true })}
            />
            {errors.location && errors.location.type === "required" && (
              <Text mt="8px" color="red">
                This field is required!
              </Text>
            )}
          </FormLabel>
          <FormLabel
            type="numbers"
            id="start-time"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            Start time:
            <Input
              mt="10px"
              color="black"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              type="datetime-local"
              {...register("startTime", { required: true })}
            />
            {errors.startTime && errors.startTime.type === "required" && (
              <Text mt="8px" color="red">
                This field is required!
              </Text>
            )}
          </FormLabel>
          <FormLabel
            type="numbers"
            id="end-time"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            End time:
            <Input
              mt="10px"
              color="black"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              type="datetime-local"
              {...register("endTime", { required: true })}
            />
            {errors.endTime && errors.endTime.type === "required" && (
              <Text mt="8px" color="red">
                This field is required!
              </Text>
            )}
          </FormLabel>

          <FormLabel
            type="text"
            id="categories"
            mb="20px"
            fontSize="17px"
            color="rgb(30, 30, 30)"
          >
            Categories:
            <Flex mt="10px">
              {categories.map(({ name, id }) => (
                <Flex
                  key={id}
                  color="rgb(0, 51, 255)"
                  alignItems="center"
                  mb="10px"
                >
                  <Checkbox
                    ml="10px"
                    mt="5px"
                    backgroundColor="white"
                    type="checkbox"
                    id={id}
                    value={id}
                    {...register("categoryIds", {})}
                  />
                  <Text ml="5px">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </FormLabel>

          <FormLabel
            type="text"
            id="attended-by"
            mb="20px"
            fontSize="17px"
            color="rgb(0, 30, 30)"
          >
            Attended by:
            <Flex mt="10px">
              {users.map(({ name, id }) => (
                <Flex
                  key={id}
                  color="rgb(0, 51, 255)"
                  alignItems="center"
                  mb="10px"
                >
                  <Checkbox
                    ml="10px"
                    mt="5px"
                    backgroundColor="white"
                    colorScheme="blue"
                    type="checkbox"
                    id={id}
                    value={id}
                    {...register("attendedBy", {})}
                  />
                  <Text ml="5px">{name}</Text>
                </Flex>
              ))}
            </Flex>
          </FormLabel>

          <FormLabel
            type="text"
            id="created-by"
            mb="20px"
            fontSize="18px"
            color="rgb(30, 30, 30)"
          >
            Created by:
            <Select
              mt="10px"
              color="black"
              backgroundColor="white"
              focusBorderColor="rgb(0, 51, 255)"
              {...register("createdBy")}
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Select>
          </FormLabel>

          {isPending ? (
            <Button
              disabled
              color="white"
              background="rgb(0, 51, 255)"
              mb="20px"
              width={{ lg: "150px" }}
            >
              Adding event...
            </Button>
          ) : (
            <Button
              type="submit"
              color="white"
              mb="20px"
              width={{ lg: "150px" }}
              background="rgb(0, 51, 255)"
              _hover={{ background: "rgb(11, 19, 189)" }}
              onClick={handleAdd}
            >
              {" "}
              Add event
            </Button>
          )}

          <Button
            color="white"
            background="rgb(50, 50, 50)"
            mb="20px"
            ml="20px"
            width={{ lg: "150px" }}
            _hover={{ background: "rgb(90, 90, 90)" }}
            onClick={() => history("/")}
          >
            Go back
          </Button>
        </form>
      </Center>
    </>
  );
};
