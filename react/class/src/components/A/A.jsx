// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Company from "./pages/AboutUs/Company";
import Team from "./pages/AboutUs/Team";
import Mission from "./pages/AboutUs/Mission";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />}>
            {/* <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
            <Route path="mission" element={<Mission />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
