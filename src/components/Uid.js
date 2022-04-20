import { useAuth } from "../Contexts/AuthContexts";
import React from "react";

export default function Uid() {
  const { currentUSer } = useAuth();
  return <div>uid</div>;
}
