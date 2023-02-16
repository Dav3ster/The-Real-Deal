import React, {useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';

const styles = {
    container: {
        background: 'linear-gradient(20deg,dodgerblue,green,silver)',
        borderBottom: 'solid 7.5px black'
      },
    photo: {
        display: 'flex',
        borderRadius: 30,
        border:'solid 7.5px black',
        width: 'auto',
        maxHeight: '500px',
        minHeight: '500px',
        minWidth: '250px',
        margin: '10px'    
      },
      RowStyles:{
        display: 'flex',
        justifyContent: 'space-evenly'
      },
      form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25px'
      },
      h2styles:{
        color: 'black',
        textShadow: '1px 2px 3px lightblue',
        fontFamily: 'palatino',
    },
    col:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
}

function Form() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_opnzx9f', 'template_oxofy9h', form.current, 'ks3DeBkWe5WKC1m72')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });

      alert('Email sent successfully!')
  };

    return (
    <Container fluid style={styles.container}>
     <Row style={styles.RowStyles}>
        <Col m={4} style={styles.col}>
        <img src={require('../images/MePhoto1.jpg')} className='img-fluid' alt='MePhoto1' style={styles.photo}/>
        </Col>

        <Col m={4}>
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <h2 style={styles.h2styles}><strong>Feel free to reach out!</strong></h2>  
          <label>-Name-</label>
          <input type="text" name="user_name" /><br></br>
          <label>-Email-</label>
          <input type="email" name="user_email" /><br></br>
          <label>-Message-</label>
          <textarea name="message" />
          <input type="submit" value="Send" className='mt-2'/>
        </form>
        </Col>

        <Col m={4} style={styles.col}>
        <img src={require('../images/MePhoto2.jpg')} className='img-fluid' alt='MePhoto1' style={styles.photo}/>
        </Col>
     </Row>
    </Container>
)}

export default Form;