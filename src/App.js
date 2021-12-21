import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* import P404 from "./Components/P404"; */
import Home from "./Components/Home";
import SigninPage from "./Components/SigninPage";
/* import P404_2 from "./Components/HeroSection/P404_2"; */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        {/* <Route path="*" element={<P404_2/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
