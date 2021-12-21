import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { homeObjOne} from "./Components/P404/Data";

/* import P404 from "./Components/P404"; */
import Home from "./Components/Home";
import SigninPage from "./Components/SigninPage";
import P404 from "./Components/P404/P404";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<P404 {...homeObjOne}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
