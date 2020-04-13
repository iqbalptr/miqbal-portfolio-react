import React from 'react';
import { 
  Jumbotron, 
  Button, 
  Alert,
  CardTitle,
  Col,
  Card,
  CardText,
  Row
       } from 'reactstrap';

const Body = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, I'm Iqbal!</h1>
        <p className="lead">This is my portfolio</p>
        <hr className="my-2" />
        <p>It uses for work experience as student full web developer in impactbyte!</p>
        <p className="lead">
          <Button color="primary">Download my CV</Button>
        </p>
      </Jumbotron>
  
      <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Front End Developer</CardTitle>
          <CardText>is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.</CardText>
          
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Back End Developer</CardTitle>
          <CardText> is a type of programmer who creates the logical back-end and core computational logic of a website, software or information system. </CardText>
        
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Body;