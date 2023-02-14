import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    container: {
        background: 'linear-gradient(20deg,dodgerblue,green,silver)',
      },
      colstyles:{
        margin: '10px'
      },
    photo: {
        display: 'flex',
        borderRadius: 30,
        border:'solid 7.5px black',
        width: 'auto',
        maxHeight: '500px',
        minHeight: '250px',
        minWidth: '250px'    
      },
      badges: {
        padding: '5px'
    },
    aLinks: {
        color: 'black',
        textDecoration: 'none',
    },
    linkTitle:{
        color: 'black',
        textShadow: '1px 2px 3px blue',
        fontFamily: 'palatino',
        margin: '0px'
    }
}

function Showcase() {
    return (
    <Container fluid style={styles.container}>
     <Row>

      <Col m={6} style={styles.colstyles}>
      <center><h2>Placeholder</h2></center>  
      <img src={require('../images/Fullstacks.png')} className='img-fluid' alt='Me&Rebecca' style={styles.photo}/>
      <center><p>placeholder</p></center>
      <center>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://www.linkedin.com/in/david-stewart-8b046725a/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      
      </Col>

      <Col m={6} style={styles.colstyles}>
      <center><h2>Placeholder</h2></center>  
      <img src={require('../images/Fullstacks.png')} className='img-fluid' alt='Me&Rebecca' style={styles.photo}/>
      <center><p>placeholder</p></center>
      <center>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://www.linkedin.com/in/david-stewart-8b046725a/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      </Col>

     </Row>
     <Row>

      <Col m={6} style={styles.colstyles}>
      <center><h2>Placeholder</h2></center>  
      <img src={require('../images/Fullstacks.png')} className='img-fluid' alt='Me&Rebecca' style={styles.photo}/>
      <center><p>placeholder</p></center>
      <center>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://www.linkedin.com/in/david-stewart-8b046725a/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      </Col>

      <Col m={6} style={styles.colstyles}>
      <center><h2>Placeholder</h2></center>  
      <img src={require('../images/Fullstacks.png')} className='img-fluid' alt='Me&Rebecca' style={styles.photo}/>
      <center><p>placeholder</p></center>
      <center>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://www.linkedin.com/in/david-stewart-8b046725a/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      </Col>

     </Row>
    </Container>
    )
}

export default Showcase;