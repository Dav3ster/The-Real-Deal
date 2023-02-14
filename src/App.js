import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applicaitons";
import Contact from "./pages/Contact"

const App = () => {
  let component
  // eslint-disable-next-line
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Applications":
      component = <Applications />
      break
    case "/Contact":
      component = <Contact />
      break
  }
  return (
    <div> 
      <HomeBar />
      {component}
    </div>
  );
}

export default App;
