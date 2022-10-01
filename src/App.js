import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import GenericLanding from "./pages/GenericLanding.jsx"
import Event from "./pages/Event";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GenericLanding />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
