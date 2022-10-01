import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import GenericLanding from "./pages/GenericLanding.jsx"
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GenericLanding />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
