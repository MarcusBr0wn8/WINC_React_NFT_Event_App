import { Button, useToast, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Label } from "./Label";
import { DateTime } from "./DateTime";
import { TextArea } from "./TextArea";
import { CheckBox } from "./CheckBox";
import { ModalMessages } from "../components/ModalMessages";

//Data loader
export const loader = async ({ params }) => {
  const event = await (
    await fetch(
      `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/${params.eventId}`
    )
  ).json();
  const categories = await (
    await fetch(
      "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/categories/"
    )
  ).json();
  const users = await (
    await fetch(
      "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/users/"
    )
  ).json();

  return [event, categories, users];
};

export const EditForm = () => {
  const [event, categories] = useLoaderData();
  const [userEvent, setUserEvent] = useState(event);
  const [isPending, setIsPending] = useState(false);

  //Pop up message hook
  const toast = useToast();

  //Navigation hook
  const history = useNavigate();

  //Jump to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //PUT request to the backend
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsPending(true);
  //   console.log(userEvent);
  //   const response = await fetch(
  //     `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/` +
  //       userEvent.id,
  //     {
  //       method: "PUT",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify(userEvent),
  //     }
  //   );

  //   if (response.ok) {
  //     setIsPending(false);
  //     toast({
  //       title: "Event updated",
  //       description: "We have successfully edited the NFT-event for you!",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "top",
  //     });
  //     history(`/event/${userEvent.id}`);
  //   } else {
  //     toast({
  //       title: "Event didn't update",
  //       description: "Something went wrong!",
  //       status: "error",
  //       duration: 9000,
  //       isClosable: true,
  //       position: "top",
  //     });
  //     setIsPending(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const response = await fetch(
      `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/` +
        userEvent.id,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userEvent),
      }
    );

    if (response.ok) {
      setIsPending(false);
      toast({
        render: ({ onClose }) => (
          <ModalMessages
            title="Update NFT-event"
            description="NFT-event successfully edited!"
            status="success"
            onClose={onClose}
            history={history}
          />
        ),
      });
      history(`/event/${userEvent.id}`);
    } else {
      toast({
        render: ({ onClose }) => (
          <ModalMessages
            title="Event didn't update"
            description="Something went wrong!"
            status="error"
            onClose={onClose}
          />
        ),
      });
      setIsPending(false);
    }
  };

  //Setting the state for categories
  const handleClick = (e) => {
    const { value, checked } = e.target;
    const categoryIds = userEvent.categoryIds;
    if (checked) {
      const valueExist = categoryIds.includes(Number(value));
      if (!valueExist) {
        categoryIds.push(Number(value));
        setUserEvent({ ...userEvent, categoryIds: categoryIds });
      }
    } else {
      setUserEvent({
        ...userEvent,
        categoryIds: categoryIds.filter((id) => Number(value) !== id),
      });
    }
  };

  //function for the input fields
  const handleChange = (e) => {
    setUserEvent({ ...userEvent, [e.target.name]: e.target.value });
    console.log(userEvent);
  };

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
        <Header title={"Edit your event here"} />
        <form onSubmit={handleSubmit}>
          <Label
            title={" Title of the event:"}
            name={"title"}
            value={userEvent.title}
            onChange={handleChange}
          />
          <TextArea
            title={" Description of the event:"}
            name="description"
            value={userEvent.description}
            onChange={handleChange}
          />
          <Label
            title={"Image of the event in URL form:"}
            name="image"
            value={userEvent.image}
            onChange={handleChange}
          />
          <Label
            title={"Location of the event:"}
            name="location"
            value={userEvent.location}
            onChange={handleChange}
          />
          <DateTime
            title={"Start time:"}
            name="startTime"
            value={userEvent.startTime}
            onChange={handleChange}
          />
          <DateTime
            title={"End time:"}
            name="endTime"
            value={userEvent.endTime}
            onChange={handleChange}
          />
          <CheckBox
            categories={categories}
            event={event}
            title={"Categories:"}
            onChange={handleClick}
          />

          {isPending ? (
            <Button
              disabled
              color="white"
              background="rgb(0, 51, 255)"
              mb="20px"
              mr="20px"
              width={{ lg: "150px" }}
            >
              Saving event...
            </Button>
          ) : (
            <Button
              type="submit"
              color="white"
              background="rgb(0, 51, 255)"
              mb="20px"
              mr="20px"
              width={{ lg: "150px" }}
              _hover={{ background: "rgb(11, 19, 189)" }}
            >
              Save
            </Button>
          )}

          <Link to={`/event/${event.id}`}>
            <Button
              color="white"
              background="rgb(50, 50, 50)"
              mb="20px"
              width={{ lg: "150px" }}
              _hover={{ background: "rgb(90, 90, 90)" }}
            >
              Go back
            </Button>
          </Link>
        </form>
      </Center>
    </>
  );
};
