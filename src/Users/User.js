import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../slices/userSlice";
import { loginToAccount } from "../slices/loginSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Users/UserStyles.css";

export const User = () => {
  const token = useSelector((state) => state.login.token);
  const error = useSelector((state) => state.user.error);
  const userAvatars = useSelector((state) => state.user.list);
  const status = useSelector((state) => state.user.status);
  const dispatch = useDispatch();
  const [filter, setfilter] = useState("");

  const filteredList = userAvatars.filter((user) =>
    user.email.startsWith(filter)
  );

  const handleLogout = () => {
    dispatch(loginToAccount({}));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (error) {
    return <div>{error}<br /><b>Status: <br></ br> Error</b></div>;
  }
  if (!token || token.length === 0) {
    return <div><br /><b>Status:</b> Please login to see avatars</div>;
  }

  return (
    <div className="App">
       <br />
          <br />
          <hr></hr>
          <h1 id="WelcomePage">Welcome user!</h1>
          <br />
      <h5>Filter users on REQRES:</h5>
      <input
        type="text"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
        placeholder= "filter by example@reqres.in" 
      ></input>
      <br />
      <br />
      <h3>Current registered users on REQRES:</h3>
          <br />
      <div className="flex">
        {filteredList.length &&
          filteredList.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
      <br />
      <br />
      <button 
        onClick={() => handleLogout()}>
          Sign out
      </button>
    </div>
  );
};
