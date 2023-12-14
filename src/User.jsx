import { useState } from "react";
import { shallow } from "zustand/shallow";
import "./App.css";
import { useAppStore } from "./stores/app-store";

function User() {
  const [user, getUser, logoutUser] = useAppStore((state) => {
    return [state.user, state.getUser, state.logoutUser];
  }, shallow);

  const [username, setUsername] = useState("");
  return (
    <>
      <h1>Please login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={() => getUser(username)}>login</button>
      <p>
        you logged in as{" "}
        {user.login && (
          <>
            <p>{user.login}</p>
          </>
        )}
      </p>
      <hr />
      <button onClick={() => logoutUser()}>Logout</button>
    </>
  );
}

export default User;
