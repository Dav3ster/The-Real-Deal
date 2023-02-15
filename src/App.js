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
         <Switch>
          <Route exact path="https://dav3ster.github.io/The-Real-Deal/">
            <Home />
          </Route>
          <Route exact path="https://dav3ster.github.io/Applications">
            <Applications />
          </Route>
          <Route exact path="https://dav3ster.github.io/Contact">
            <Contact />
          </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
