import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemSpecs from "./components/CardEquipment";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import History from "./pages/History";
import PulseOximeter from "./components/PulseOximeter";
import Scale from "./components/Scale";
import Thermometer from "./components/Thermometer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cardEquipment" element={<ItemSpecs />} />
          <Route path="/history" element={<History />} />
          <Route path="/pulseOximeter" element={<PulseOximeter />} />
          <Route path="/scale" element={<Scale />} />
          <Route path="/thermometer" element={<Thermometer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;