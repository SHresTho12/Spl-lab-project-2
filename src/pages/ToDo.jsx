import React from 'react'
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "../components/TodoList";
import AddTodolist from "../components/AddTodolist";
import { FaCalendar, FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Layout } from '../components/Layout';
function ToDo() {
    const initialTodos = [
    {
      id: 1,
      body: "Learn ChakraUI",
    },
    {
      id: 2,
      body: "Implement in the SPL",
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Layout><VStack p={4} border="solid" bg={ colorMode === "dark" ? "gray.700": "gray.200"}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        ></IconButton>
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="Linear(to-r , pink.500,pink.300,blue.500)"
          bgClip="text"
          p="4"
        >
          To Do List
        </Heading>
        <TodoList todo={todos} deleteTodo={deleteTodo}></TodoList>
        <AddTodolist addTodo={addTodo}></AddTodolist>
      </VStack></Layout>
    
  )
}

export default ToDo