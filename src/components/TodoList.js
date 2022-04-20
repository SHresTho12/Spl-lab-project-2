import React from "react";
import {
  Heading,
  VStack,
  IconButton,
  HStack,
  Text,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
function TodoList({ todo, deleteTodo }) {
  if (!todo.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius={"lg"}>
        No Todo Task , Yay !!!!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="grey.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todo.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            size="lg"
            alignSelf="flex-end"
            onClick={() => deleteTodo(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
