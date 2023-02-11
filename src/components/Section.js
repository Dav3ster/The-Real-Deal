import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  container: {
    background: 'linear-gradient(90deg,dodgerblue,green)',
  },
  colstyles: {
    padding: '0'
  },

};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <Container fluid style={styles.container}>
      <Row>
       <Col xs={6} style={styles.colstyles}>
       <img src={require('../images/Me&Rebecca.jpg')} className='img-fluid shadow-4' alt='Me&Rebecca' />
       </Col>
       <Col xs={6} style={styles.colstyles}>

       </Col>
      </Row>
    </Container>
  );
}

export default Section;
