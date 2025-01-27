/** @format */

import { useState } from "react";
import { Task, Tasks } from "./components/Task";
import { Input } from "./components/Input";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Input></Input>
      <Tasks>
        <Task />
        <Task />
      </Tasks>
    </>
  );
}

export default App;
