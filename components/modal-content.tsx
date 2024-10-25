import { Button } from "@nextui-org/button";
import {
  ModalContent as Content,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import React from "react";

import { postTitle } from "./primitives";

import { capitalizeFirstLetter } from "@/utils/capitalize";
import { Post } from "@/types";

export const ModalContent = ({ title, body }: Post) => {
  return (
    <Content>
      {(onClose) => (
        <>
          <ModalHeader
            className={postTitle({
              color: "pink",
              size: "sm",
              class: "flex flex-col gap-1",
            })}
          >
            {capitalizeFirstLetter(title)}
          </ModalHeader>
          <ModalBody>
            <p>{capitalizeFirstLetter(body)}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </Content>
  );
};
