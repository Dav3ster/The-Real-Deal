import React from 'react';
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Navbar';

const styles = {
  name: {
   fontSize: '85px',
   fontFamily: 'palatino',
   responsive: 'true',
   color: 'black',
   textShadow: '2px 2px 3px white',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'linear-gradient(45deg,silver,green,dodgerblue)',
    border: 'solid 7.5px black ',
  },
  container: {
    width: '100%',
    padding: '0',
  },
  tabs: {
    responsive: 'true'
  },
  tabItems: {
    display: 'flex',
    fontSize: '37.5px',
    color: 'white',
    padding: '5px',
    textShadow: '2px 2px 3px black',
    textDecoration: 'none',
    height: '100%',
  
  },
  colstyles: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  ul:{
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 10px 0px 30px'  
  }
};

function HomeBar() {
  return (
    <>
     <Container fluid style={styles.container}>
       <Row bg="dark" style={styles.navbar}>
          <Col md={6} style={styles.colstyles}>
            <h1 style={styles.name}><strong>David Stewart</strong></h1>
          </Col>
          <Col md={6} style={styles.colstyles}>
           <nav style={styles.tabs} className='nav'> 
            <ul style={styles.ul}>
             <li><Link href="/" style={styles.tabItems}>Home</Link></li>
             <li><Link href="/Applications" style={styles.tabItems}>Applications</Link></li>
             <li><Link href="/Contact" style={styles.tabItems}>Contact</Link></li>
            </ul>
           </nav>
          </Col>
       </Row>
     </Container>
    </>
  );
}

export default HomeBar;