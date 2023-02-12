import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    container: {
      width: 'auto',
      padding: '0',
    },
    btnrow: {
        display: 'flex',
        justifyContent: 'space-around',
        background: 'linear-gradient(45deg,silver,green,dodgerblue)',
        border: 'solid 7.5px black ',
        padding: '10px'
    },
    btn: {
        borderRadius: '5px'
    },
    h3: {
        fontFamily: 'palatino',
        responsive: 'true',
        color: 'black',
        textShadow: '2px 2px 3px white'
    },
    badges: {
        padding: '5px'
    }
  };

const Button = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('David_Stewart_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'David_Stewart_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <Container fluid style={styles.container}>
      <Row style={styles.btnrow} className='m-0'>
        <Col md={5} className= 'my-3'>
        <div>
            <center>
                <h3 style={styles.h3}>For more information check out my resume</h3>
                <button onClick={onButtonClick} style={styles.btn}>
                    <em>Download Resume</em>
                </button>
            </center>
        </div>
        </Col>
        <Col md={7} className= 'mt-3'>
        <center>
        <img src={require('../images/001-mysql.png')} className='img-fluid ' alt='mysqlLogo' style={styles.badges}/>
        <img src={require('../images/002-nodejs.png')} className='img-fluid ' alt='nodejsLogo' style={styles.badges}/>
        <img src={require('../images/003-bootstrap.png')} className='img-fluid ' alt='bootstrapLogo' style={styles.badges}/>
        <img src={require('../images/004-javascript.png')} className='img-fluid ' alt='javascriptLogo' style={styles.badges}/>
        <img src={require('../images/005-html-5.png')} className='img-fluid ' alt='htmlLogo' style={styles.badges}/>
        <img src={require('../images/006-css-3.png')} className='img-fluid ' alt='cssLogo' style={styles.badges}/>
        <img src={require('../images/007-git.png')} className='img-fluid ' alt='gitLogo' style={styles.badges}/>
        <img src={require('../images/008-react.png')} className='img-fluid ' alt='reactLogo' style={styles.badges}/>
        </center>

        </Col>
      </Row>
    </Container>

      
    );
};
  
export default Button;