import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginToAccount } from "../slices/loginSlice";
import { registerAccount } from "../slices/registrationSlice";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../LoginForm/LoginForm.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginToAccount({email, password}));
    setEmail("");
    setPassword("");
  }

  const handleRegistration = () => {
    dispatch(registerAccount({email, password}));
    setEmail("");
    setPassword("");
  }

  const form = (
    <div className="login-form">
      <h1>REQ | RES</h1>
      <hr></hr>
      <h3>Log In to Your Account</h3>
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder= "example@reqres.in" 
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder= "password" 
      />
      <br />
      <br />
      <Button
        disabled={email.length === 0 || password.length === 0}
        onClick={() => handleLogin()}
      >
        Log in
      </Button>
      <Button
        disabled={email.length === 0 || password.length === 0}
        onClick={() => handleRegistration()}
      >
        Register
      </Button>
    </div>
  );
  return form;
};
