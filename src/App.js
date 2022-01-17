import React from "react";
import AppRouter from "./components/AppRouter";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Loginpage";
import AuthContextProvider from "./Contexts/AuthContexts";

function App() {
  return (
    <AuthContextProvider>
      {" "}
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
