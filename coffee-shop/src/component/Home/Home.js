import Cold from "../Cold/Cold"
import Hot from "../Hot/Hot"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'
function Home () {
    let image = "https://img0.baidu.com/it/u=1253245222,4073951074&fm=26&fmt=auto"
    return (
    <div>

```<img classname="homepage" src={image}/>


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