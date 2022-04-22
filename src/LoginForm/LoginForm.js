import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginToAccount } from "../slices/loginSlice";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginToAccount({email, password}));
    setEmail("");
    setPassword("");
  }

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={email.length === 0 || password.length === 0}
        onClick={() => handleLogin()}
      >
        Login
      </button>
    </div>
  );
  return form;
};
