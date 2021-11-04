import Cold from "../Cold/Cold"
import Hot from "../Hot/Hot"
import Cart from "../Cart/Cart"
import { useState } from "react/cjs/react.development"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home () {
    let image = "https://image.freepik.com/free-vector/espresso-coffee-cup-coffee-beans_79603-1038.jpg"
    return (
    <div>
        <Container fluid >
  <Row>
    <Col><img src={image}/></Col>
  </Row>
</Container>

        <Container>
  <Row>
    <Col xs={12} md={6}><Hot /></Col>
    <Col xs={12} md={6}><Cold /></Col>
  </Row>   
        </Container>

 
    </div>
)
}

export default Home