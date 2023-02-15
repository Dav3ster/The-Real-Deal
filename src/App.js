import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./components/Home";
import Applications from "./components/Applicaitons";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
       <HomeBar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Apllications" element={<Applications />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Switch>
    </Router>
  );
}

export default App;

