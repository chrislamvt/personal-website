import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/layout";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import NoPage from "./pages/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
