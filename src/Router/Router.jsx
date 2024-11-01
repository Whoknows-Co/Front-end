import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ConsultantPage from "../pages/ConsultantPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moshaver" element={<ConsultantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
