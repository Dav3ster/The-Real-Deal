import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./components/Home";
import Applications from "./components/Applicaitons";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
       <HomeBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Applications" element={<Applications />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;

