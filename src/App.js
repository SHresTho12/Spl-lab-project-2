import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Loginpage";
import AuthContextProvider from "./Contexts/AuthContexts";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:3001/profile").then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <AuthContextProvider>
      {" "}
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
