import { useState } from "react";
import "./styles.css";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return <div className="App">{props.render(count, incrementCounter)}</div>;
}
