import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "Lisa";
  return <h1>Hello React!</h1>;
}

// React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// without using strict mode:
// root.render(<App />);

// using strict mode:
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18, it was done this way instead:
// ReactDOM.render(<App />);
