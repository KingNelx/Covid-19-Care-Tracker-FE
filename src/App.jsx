import './App.css'
import AdminHome from './Admin/AdminHome';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSignIn from './Admin/AdminSignIn';
import AdminSignUp from './Admin/AdminSignUp';
import AdminDashBoard from './Admin/AdminDashBoard';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminSignIn" element={<AdminSignIn />} />
          <Route path="/adminSignUp" element={<AdminSignUp />} />
          <Route path="/adminDashBoard" element={<AdminDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;