import React from 'react';
import { Progress } from 'reactstrap';

const Skills = (props) => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
      <div className="text-center">MY SKILLS CODE</div>
      <br/>
      <br/>
      <div className="text-center">HTML</div>
      <Progress value="80" />
      <br/>
      <div className="text-center">CSS</div>
      <Progress color="success" value={50} />
      <br/>
      <div className="text-center">JAVASCRIPT</div>
      <Progress color="info" value={40} />
      <br/>
      <div className="text-center">REACT.js</div>
      <Progress color="warning" value="30" />
      <br/>
      <div className="text-center">FLUTTER</div>
      <Progress color="danger" value={50} />
      <br/>
      <div className="text-center">All the Progress</div>
      <Progress multi>
        <Progress bar value="80" />
        <Progress bar color="success" value="50" />
        <Progress bar color="info" value="40" />
        <Progress bar color="warning" value="30" />
        <Progress bar color="danger" value="50" />
      </Progress>
    </div>
  );
};

export default Skills;