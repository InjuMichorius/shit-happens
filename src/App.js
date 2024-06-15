import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/pages/home";
import NoPage from "./components/pages/noPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
