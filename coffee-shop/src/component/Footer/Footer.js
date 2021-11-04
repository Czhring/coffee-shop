import  Navbar from 'react-bootstrap/Navbar';
import { Container} from 'react-bootstrap';
import './Footer.css'

function Footer () {
    return (
    <div className='footer'>
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand>
              <p>CONNECT WITH US :(510)-***-8888</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        </Container>
      </div>
    )      
}


export default Footer