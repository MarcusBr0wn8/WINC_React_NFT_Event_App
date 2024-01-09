// import {
//   Button,
//   Center,
//   Flex,
//   Modal,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
// } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import { Event } from "../components/Event";
// import { Buttons } from "../components/Buttons";

// // Data loader
// export const loader = async ({ params }) => {
//   const event = await (
//     await fetch(
//       `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/${params.eventId}`
//     )
//   ).json();
//   const categories = await (
//     await fetch(
//       "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/categories"
//     )
//   ).json();
//   const users = await (
//     await fetch(
//       "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/users/"
//     )
//   ).json();

//   return [event, categories, users];
// };

// export const EventPage = () => {
//   const [event, categories, users] = useLoaderData();

//   // Navigation
//   const history = useNavigate();

//   // Modal actions
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   // Delete
//   const handleDelete = async () => {
//     const response = await fetch(
//       `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/` +
//         event.id,
//       {
//         method: "DELETE",
//       }
//     );
//     if (response.ok) {
//       onClose({
//         title: "Event successfully deleted",
//       description: "Event deleteted!",
//       duration: "6000",
//       isClosable: "true",
//     });
//       // Optionally, you can add a delay before redirecting to give users a chance to see the success message.
//       setTimeout(() => {
//         history("/");
//       }, 1000);
//     } else {
//       // Handle deletion error
//       // You can display an error message here if needed
//     }
//   };

//   // Top of page
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Center
//         display="flex"
//         flexDir="column"
//         rowGap={5}
//         ml={{ base: "2em", md: "4em", lg: "6em" }}
//         mr={{ base: "2em", md: "4em", lg: "6em" }}
//       >
//         <Flex direction="column">
//           <Event event={event} category={categories} users={users} />
//           <Flex
//             display="flex"
//             flexDirection={{ basis: "row", sl: "column", md: "row" }}
//             justifyContent={"center"}
//             alignContent={"center"}
//             columnGap={{ base: 2 }}
//             mt="20px"
//             mb="30px"
//           >
//             <Link to={`/event/${event.id}/editevent`}>
//               <Buttons title={"Edit event"}>Edit event</Buttons>
//             </Link>
//             <Buttons onClick={onOpen} title={"Delete Event"}>
//               Delete Event
//             </Buttons>
//           </Flex>
//           <Modal isOpen={isOpen} onClose={onClose} size={{ lg: "lg" }}>
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader color="rgb(30, 30, 30)">
//                 Are you sure you want to delete this NFT-event? This cannot be
//                 undone.
//               </ModalHeader>
//               <ModalCloseButton />
//               <ModalFooter display="flex">
//                 <Button
//                   onClick={handleDelete}
//                   color="white"
//                   background="rgb(0, 51, 255)"
//                   _hover={{ background: "rgb(11, 19, 189)" }}
//                   mb="20px"
//                   mr="10px"
//                 >
//                   Yes
//                 </Button>
//                 <Button
//                   onClick={onClose}
//                   color="white"
//                   background="rgb(30, 30, 30)"
//                   _hover={{ background: "rgb(90, 90, 90)" }}
//                   mb="20px"
//                 >
//                   No
//                 </Button>
//               </ModalFooter>
//             </ModalContent>
//           </Modal>
//         </Flex>
//       </Center>
//     </>
//   );
// };

import {
  Button,
  Center,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Event } from "../components/Event";
import { Buttons } from "../components/Buttons";

// Data loader
export const loader = async ({ params }) => {
  const event = await (
    await fetch(
      `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/${params.eventId}`
    )
  ).json();
  const categories = await (
    await fetch(
      "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/categories"
    )
  ).json();
  const users = await (
    await fetch(
      "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/users/"
    )
  ).json();

  return [event, categories, users];
};

export const EventPage = () => {
  const [event, categories, users] = useLoaderData();

  // Navigation
  const history = useNavigate();

  // Modal actions
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Toast
  const toast = useToast();

  // Delete
  const handleDelete = async () => {
    const response = await fetch(
      `https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events/` +
        event.id,
      {
        method: "DELETE",
      }
    );

    onClose();

    // Styling toast pop-up same as Modal pop-up
    const toastConfig = {
      status: "success",
      duration: 5000,
      isClosable: true,

      render: ({ onClose }) => (
        <Modal
          isOpen={true}
          onClose={onClose}
          size={{ base: "s", lg: "lg" }}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="rgb(30, 30, 30)">Event deleted!</ModalHeader>
            <ModalBody color="rgb(30, 30, 30)">
              {" "}
              Your NFT-event is succesfully deleted.
            </ModalBody>
            <ModalCloseButton onClick={onClose} />
            <ModalFooter display="flex">
              <Button
                onClick={() => {
                  onClose();
                  history("");
                }}
                color="white"
                background="rgb(0, 51, 255)"
                _hover={{ background: "rgb(11, 19, 189)" }}
                mb="20px"
                mr="10px"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ),
    };

    if (response.ok) {
      toast(toastConfig);
    } else {
      <ModalHeader color="rgb(30, 30, 30)">
        Sorry, something went wrong.
      </ModalHeader>;
    }
  };

  // Top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Center
        display="flex"
        flexDir="column"
        rowGap={5}
        ml={{ base: "2em", md: "4em", lg: "6em" }}
        mr={{ base: "2em", md: "4em", lg: "6em" }}
      >
        <Flex direction="column">
          <Event event={event} category={categories} users={users} />
          <Flex
            display="flex"
            flexDirection={{ basis: "row", sl: "column", md: "row" }}
            justifyContent={"center"}
            alignContent={"center"}
            columnGap={{ base: 2 }}
            mt="20px"
            mb="30px"
          >
            <Link to={`/event/${event.id}/editevent`}>
              <Buttons title={"Edit event"}>Edit event</Buttons>
            </Link>
            <Buttons onClick={onOpen} title={"Delete Event"}>
              Delete Event
            </Buttons>
          </Flex>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ lg: "lg" }}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color="rgb(30, 30, 30)">
                Are you sure you want to delete this NFT-event? This cannot be
                undone.
              </ModalHeader>
              <ModalCloseButton />
              <ModalFooter display="flex">
                <Button
                  onClick={handleDelete}
                  color="white"
                  background="rgb(0, 51, 255)"
                  _hover={{ background: "rgb(11, 19, 189)" }}
                  mb="20px"
                  mr="10px"
                >
                  Yes
                </Button>
                <Button
                  onClick={onClose}
                  color="white"
                  background="rgb(30, 30, 30)"
                  _hover={{ background: "rgb(90, 90, 90)" }}
                  mb="20px"
                >
                  No
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Center>
    </>
  );
};
