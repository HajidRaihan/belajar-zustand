import "./App.css";
import Count from "./Count";
import { useAppStore } from "./stores/app-store";
import User from "./User";

function App() {
  const username = useAppStore((state) => state.username);
  const updateUsername = useAppStore((state) => state.updateUsername);
  console.log("render username");
  return (
    <>
      <h1>hai {username}</h1>
      <input
        type="text"
        onChange={(e) => {
          const newvalue = e.target.value;
          updateUsername(newvalue);
        }}
      />

      <Count />
      <hr />
      <User />
      <hr />
    </>
  );
}

export default App;
