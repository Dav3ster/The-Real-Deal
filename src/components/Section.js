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
    border:'solid 7.5px black',
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
    border: 'solid 7.5px black',
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(45deg, dodgerblue, white, green)',
    width: 'auto',
    maxHeight: '500px', 
    minHeight: '250px',
    minWidth: '250px'  
  },
  row1:{
    height: 'auto'
  },
  title:{
    fontFamily: 'palatino',
    color: 'black',
    textShadow: '2px 2px 3px white',
  },
  title2:{
    marginBottom: '30px',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <Container fluid style={styles.container}>
      <Row style={styles.row1}>
        <Col md={1}></Col>
       <Col md={5} style={styles.colstyles} className='mb-3'>
        <center>
          <h3 style={styles.title} className='mt-2'><strong>Full-Stack Software Developer</strong></h3>
        </center>
       <img src={require('../images/Me&Rebecca.jpg')} className='img-fluid mx-4 mt-1' alt='Me&Rebecca' style={styles.photo}/>
       </Col>
       <Col md={5} style={styles.colstyles}>
        <style>
          {`
            ::-webkit-scrollbar{
              display: none;
            }
          `}
        </style>
        <section style={styles.pcontainer} className='mx-4 mt-5'>
          <div style={styles.pstyles}>
          <h3 style={styles.title2}><em>⭐ ~A little about myself~ ⭐</em></h3>
           <p>   
            Born and raised in North Carolina, in the RDU area.<br></br><br></br>
            I am currently working on bringing my passion for design, and efficient functionality to the web by taking UNC Chapel Hill's Full-stack web development program. I am well versed in JavaScript, CSS, HTML, SQL, 3rd Party Web APIs, Node, Express, Mongo, and most recently React. With more to come.<br></br><br></br>
            I have 10 years of high precision manufacturing experience to my name. During those years I set-up, programmed, and designed multi-step automated processes for multi-axis CNC machines, using numerous varieties of CAD and conversational software's. Working side by with engineers, I developed a keen eye for quality schematics, and a mind for efficient, and effective processes. I really enjoy the whole development process, and take pride in seeing a scratch idea come to life.<br></br><br></br>
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
