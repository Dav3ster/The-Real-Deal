import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applicaitons";
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div> 
       <HomeBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Apllications" element={<Applications />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

