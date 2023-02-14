import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    container: {
        background: 'linear-gradient(20deg,dodgerblue,green,silver)',
      },
      colstyles:{
        padding: '10px'
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
    },
    pstyles:{
        margin: '10px',
        fontFamily: 'palatino',
        fontSize: '22px',

    },
    h2styles:{
        fontFamily: 'palatino',
    }
}

function Showcase() {
    return (
    <Container fluid style={styles.container}>
     <Row>

      <Col m={6} style={styles.colstyles}>
      <center><h2 style={styles.h2styles}>FullStacksCafe</h2></center>  
      <img src={require('../images/Fullstacks.png')} className='img-fluid' alt='fullstacks' style={styles.photo}/>
      <center><p style={styles.pstyles}>This full stack application serves as an ordering system for a cafe. This MVP iteration works as an ordering app on in-house kiosks at each table, customers can select their order and send it to the kitchen where each order can reviewd on a command line interface system. This application is scalable to become a full service online ordering website and menu page, as well as being tied in to an automated ticket printer.</p></center>
      <center>
        <img src={require('../images/001-mysql.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/002-nodejs.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/003-bootstrap.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/004-javascript.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/005-html-5.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/006-css-3.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster/FullStacks-Cafe" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://fullstackscafe.herokuapp.com/home.html" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      
      </Col>

      <Col m={6} style={styles.colstyles}>
      <center><h2 style={styles.h2styles}>Weather Forecaster</h2></center>  
      <img src={require('../images/WeatherForecaster.png')} className='img-fluid' alt='weatherForecaster' style={styles.photo}/>
      <center><p style={styles.pstyles}>This application utilizes 3rd party API's to render a five day forecast for any city in the United States. This application was built using DOM oriented programming and functionality to parse and stringify data to and from local storage. </p></center>
      <center>
        <img src={require('../images/004-javascript.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/005-html-5.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/006-css-3.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster/Weather_Forecaster" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://dav3ster.github.io/Weather_Forecaster/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      </Col>

     </Row>
     <Row>

      <Col m={6} style={styles.colstyles}>
      <center><h2 style={styles.h2styles}>Password Generator</h2></center>  
      <img src={require('../images/PasswordGenerator.png')} className='img-fluid' alt='passwordGenerator' style={styles.photo}/>
      <center><p style={styles.pstyles}>This is a cool little app that utilizes JavaScript prompts to help you generate a quick password. </p></center>
      <center>
        <img src={require('../images/004-javascript.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/005-html-5.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/006-css-3.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster/Password-generator" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://dav3ster.github.io/Password-generator/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      </Col>

      <Col m={6} style={styles.colstyles}>
      <center><h2 style={styles.h2styles}>Code Quiz</h2></center>  
      <img src={require('../images/CodeQuiz.png')} className='img-fluid' alt='Me&Rebecca' style={styles.photo}/>
      <center><p style={styles.pstyles}>This is one of the first JavaScript applications I built. It's a pretty nifty code quizer, that utilizes quite a few moving parts. When you start the quiz, a timer will begin. You'll then have to race to finish before it runs out. After answering all the questions you'll get your score, which you can then add to the highscores board! </p></center>
      <center>
      <img src={require('../images/004-javascript.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/005-html-5.png')} alt='badgelogo' style={styles.badges}/>
        <img src={require('../images/006-css-3.png')} alt='badgelogo' style={styles.badges}/>
      </center>
      <center>
        <h4 style={styles.linkTitle}>Links</h4>
        <a href="https://github.com/Dav3ster/Test-Your-Knowledge" style={styles.aLinks} className='showcaselinks'>Github Repo</a><br></br>
        <a href="https://dav3ster.github.io/Test-Your-Knowledge/" style={styles.aLinks} className='showcaselinks'>Deployed Site</a>
      </center>
      </Col>

     </Row>
    </Container>
    )
}

export default Showcase;