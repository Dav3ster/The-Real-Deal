import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    footer: {
        display: 'flex',
        background: 'linear-gradient(45deg,green,silver,dodgerblue)',
        padding: '10px',
        height: '200px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linkTitle:{
        color: 'black',
        textShadow: '1px 2px 3px blue',
        fontFamily: 'palatino',
    },
}

function Footer() {
    return (
      <Container fluid>
        <Row style={styles.footer}>
         <Col md={12}>
            <center>
            <h4 style={styles.linkTitle}>Additonal Links</h4>
            <a href="https://github.com/Dav3ster">Github Profile</a><br></br>
            <a href="https://www.linkedin.com/in/david-stewart-8b046725a/">Linkedin Profile</a>
            </center>
         </Col>
        </Row>
      </Container>
    );
  }

  export default Footer;