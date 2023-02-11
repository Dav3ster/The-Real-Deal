import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
  name: {
    display: 'flex',
   fontSize: '50px',
   paddingLeft: '80px',
   fontFamily: 'palatino'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'linear-gradient(90deg,dodgerblue,green)',
    border: 'solid 7.5px ',
  },
  container: {
    padding: '0'
  },
  tabs: {
    paddingRight: '50px',
    fontSize: '25px',
    
  }
};

function HomeBar() {
  return (
    <>
     <Container fluid style={styles.container}>
       <Navbar bg="dark" variant="dark" style={styles.navbar}>
          <Navbar.Brand style={styles.name}>David Stewart</Navbar.Brand>
          <Nav style={styles.tabs}>
            <Nav.Link href="#Bio">About me</Nav.Link>
            <Nav.Link href="#Applications">Applications</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
       </Navbar>
     </Container>
    </>
  );
}

export default HomeBar;