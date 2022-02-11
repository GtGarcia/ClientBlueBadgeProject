import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar/Navbar"
import Signup from './Signup/Signup';

import {
  BrowserRouter as Router,
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <h1>Hello from app.jsx</h1>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
