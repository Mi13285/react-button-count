import "./App.css";
import Button from "./components/Button.js";
import Counter from "./components/Counter.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(90);
  const countNumber = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={countNumber} />
      <Button onClick={countNumber} />
      <Button onClick={countNumber} />
      <Button onClick={countNumber} />
    </div>
  );
}

export default App;
