import "./App.css";
import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { User } from "./Users/User";

export function App() {

  return (
    <div className="App">
      <LoginForm/>
      <User/>
    </div>
  );
}