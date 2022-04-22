import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../slices/userSlice";
import { loginToAccount } from "../slices/loginSlice";
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
    return <div>{error} Error</div>;
  }
  if (!token || token.length === 0) {
    return <div>Please login to see avatars</div>;
  }

  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
      ></input>
      <br></br>
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
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};
