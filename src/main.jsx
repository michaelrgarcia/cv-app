import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./Form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV App</h1>
    <p>Perfect if you&apos;ve only ever worked one job!</p>
    <Form />
  </StrictMode>
);
