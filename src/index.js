import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import User from "./User";
import Counter from "./Counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Counter
      render={(count, incremenCount) => (
        <ClickCounter count={count} incrementCounter={incremenCount} />
      )}
    />
    <Counter
      render={(count, incremenCount) => (
        <HoverCounter count={count} incrementHoverCounter={incremenCount} />
      )}
    />
    {/* <ClickCounter />
    <HoverCounter />
     */}
    <User render={(isLoggedIn) => (isLoggedIn ? "vishwas" : "guest")} />
  </StrictMode>
);
