import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export const ModalMessages = ({
  title,
  description,
  status,
  onClose,
  history,
}) => (
  <Modal isOpen={true} onClose={onClose} size={{ lg: "lg" }} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader color="rgb(30, 30, 30)">{title}</ModalHeader>
      <ModalBody color="rgb(30, 30, 30)">{description}</ModalBody>
      <ModalCloseButton onClick={onClose} />
      <ModalFooter display="flex">
        <Button
          onClick={() => {
            onClose();
            if (status === "success" && history) {
              history("");
            }
          }}
          color="white"
          background={
            status === "success" ? "rgb(0, 51, 255)" : "rgb(30, 30, 30)"
          }
          _hover={{
            background:
              status === "success" ? "rgb(11, 19, 189)" : "rgb(90, 90, 90)",
          }}
          mb="20px"
          mr="10px"
        >
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
