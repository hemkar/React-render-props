import "./styles.css";

export default function ClickCounter(props) {
  const { count, incrementCounter } = props;
  // const [count, setCount] = useState(0);

  // const incrementCounter = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="App">
      <button onClick={incrementCounter}>Clicked {count} time </button>
    </div>
  );
}
