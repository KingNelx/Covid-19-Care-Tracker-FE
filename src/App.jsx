import './App.css'
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Home />

      <Router>
        <Routes>
          <Route  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;