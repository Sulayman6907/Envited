import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import GenericLanding from "./components/common/GenericLanding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GenericLanding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
