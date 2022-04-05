import "./styles.css";

export default function User(props) {
  return (
    <div className="App">
      <h1>{props.render(true)}</h1>
    </div>
  );
}
