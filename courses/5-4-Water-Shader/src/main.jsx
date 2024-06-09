import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { extend } from "@react-three/fiber";
import { WaterMaterial } from "./components/WaterMaterial.jsx";

extend({ WaterMaterial });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
