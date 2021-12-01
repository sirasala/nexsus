import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Docs from "./Docs";
import Feature from "./feature";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Docs" element={<Docs />} />
      <Route path="/Features" element={<Feature />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
