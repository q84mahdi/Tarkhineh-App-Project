import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./UI/ScrollTotop";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollToTop />
      <App />
    </StrictMode>
  </BrowserRouter>,
);
