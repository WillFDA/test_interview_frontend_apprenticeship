import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.getElementsByTagName("body")[0].classList.add("dark");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
