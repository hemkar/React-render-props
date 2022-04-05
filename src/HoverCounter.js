import "./styles.css";

export default function HoverCounter(props) {
  const { count, incrementHoverCounter } = props;
  // const [count, setCount] = useState(0);

  // const incrementHoverCounter = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="App">
      <button onMouseOver={incrementHoverCounter}>Hovered {count} time </button>
    </div>
  );
}
