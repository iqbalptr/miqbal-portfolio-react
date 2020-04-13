import React from 'react'
import {Carousel} from 'react-bootstrap'
import stefan from './stefan.jpg'
import willian from './willian.jpg'
import jonatan from './jonatan.jpg'

export default class LandingPage extends React.Component {
    render(){
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={stefan} alt="First slide"/>
        <Carousel.Caption>
          <h3>Life</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={willian}alt="Third slide"/>
    
        <Carousel.Caption>
          <h3>Dark</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jonatan}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Alone</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
}