import React from 'react';
import Section from "./components/Section";
import HomeBar from "./components/Navbar";
import Button from "./components/Button";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div> 
      <HomeBar />
      <Section />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
