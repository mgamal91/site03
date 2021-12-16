import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Navbar/>
    </Router>
  );
}

export default App;
