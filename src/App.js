import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applicaitons";
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div> 
       <HomeBar />
       <div>
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Applications">
            <Applications />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
         </Switch>
       </div>
      </div>
    </Router>
  );
}

export default App;
