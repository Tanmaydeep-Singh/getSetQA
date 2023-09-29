import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/indes';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element=<Landing/> />
      <Route path="/Login" element=<Login/> />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
