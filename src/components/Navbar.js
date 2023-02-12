import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Navbar';

const styles = {
  name: {
   fontSize: '65px',
   fontFamily: 'palatino',
   responsive: 'true',
   color: 'black',
   textShadow: '2px 2px 3px white'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'linear-gradient(45deg,silver,green,dodgerblue)',
    border: 'solid 7.5px black ',
    padding: '10px'
  },
  container: {
    width: '100%',
    padding: '0',
  },
  tabs: {
    responsive: 'true',
  },
  tabItems: {
    fontSize: '37.5px',
    color: 'white',
    padding: '15px',
    textShadow: '2px 2px 3px black'
  }
};

function HomeBar() {
  return (
    <>
     <Container fluid style={styles.container}>
       <Row bg="dark" style={styles.navbar}>
          <Col md={6}>
            <h1 style={styles.name}><strong>David Stewart</strong></h1>
          </Col>
          <Col md={6} className='ms-2'>
           <nav style={styles.tabs}> 
             <a href="#Bio" style={styles.tabItems}>Me</a>
             <a href="#Applications" style={styles.tabItems}>Applications</a>
             <a href="#Contact" style={styles.tabItems}>Contact</a>
           </nav>
          </Col>
       </Row>
     </Container>
    </>
  );
}

export default HomeBar;