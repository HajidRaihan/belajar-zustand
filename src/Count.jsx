import { useAppStore } from "./stores/app-store";
import { shallow } from "zustand/shallow";

const Count = () => {
  const [count, increase, decrease] = useAppStore((state) => {
    return [state.count, state.increase, state.decrease];
  }, shallow);
  console.log("render count");
  return (
    <>
      <h1>Hello {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
};

export default Count;
