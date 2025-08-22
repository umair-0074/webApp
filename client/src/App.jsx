import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>{" "}
      <Toaster />
    </div>
  );
};

export default App;
