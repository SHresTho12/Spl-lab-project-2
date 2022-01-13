import React from "react";
import AppRouter from "./components/AppRouter";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Loginpage";

function App() {
  return <AppRouter />;
}

export default App;
