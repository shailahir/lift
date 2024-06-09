import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/600-italic.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/800-italic.css";
import "@fontsource/pt-mono";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KioskPage from "./pages/kiosk/KioskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kiosk" element={<KioskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
