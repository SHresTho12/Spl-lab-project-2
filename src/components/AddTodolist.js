import React, { useState } from "react";
import {
  Heading,
  VStack,
  IconButton,
  HStack,
  Text,
  StackDivider,
  Spacer,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";

import { nanoid } from "nanoid";
function AddTodolist({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: "No Content to add",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  }

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter new Todo Task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Task
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodolist;
