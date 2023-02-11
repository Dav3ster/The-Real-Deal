import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  container: {
    background: 'linear-gradient(20deg,dodgerblue,green,silver)',
  },
  colstyles: {
    display: 'flex',
    padding: '25px',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  photo: {
    display: 'flex',
    borderRadius: 30,
    border:'solid 5px black',
    width: 'auto',
    maxHeight: '500px',
    minHeight: '250px',
    minWidth: '250px'    
  },
  pstyles: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'medium',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadow: '1px 1px 5px white',
    padding: '15px',
    minHeight:'400px',
    overflowY: 'auto'
  },
  pcontainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'solid 5px black',
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(45deg, dodgerblue, white, green)',
    width: 'auto',
    maxHeight: '500px', 
    minHeight: '250px',
    minWidth: '250px'  
  },
  h3:{
    marginBottom: '30px',
  },
  row1:{
    height: 'auto'
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <Container fluid style={styles.container}>
      <Row style={styles.row1}>
        <Col md={1}></Col>
       <Col md={5} style={styles.colstyles}>
       <img src={require('../images/Me&Rebecca.jpg')} className='img-fluid mx-4 my-3' alt='Me&Rebecca' style={styles.photo}/>
       </Col>
       <Col md={5} style={styles.colstyles}>
        <section style={styles.pcontainer} className='mx-4 my-3'>
          <div style={styles.pstyles}>
          <h3 style={styles.h3}><em>⭐ ~A little about myself~ ⭐</em></h3>
           <p>   
            Born and raised in North Carolina, in the RDU area.<br></br><br></br>
            I will be graduating UNC's full stack web development bootcamp this March.<br></br><br></br>
            I have 10 years experience as a CNC machine programmer, with a eye for detail, and a passion for creating all things.<br></br><br></br>
            I enjoy working with a team, and seeing a final product come to fruition.<br></br><br></br>
            In my spare time, my main hobby is playing music. I play the guitar & keyboard. 
           </p>
          </div>
        </section>
       </Col>
       <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default Section;
