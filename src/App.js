import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Services from './Components/Services';

function App() {
  return (
    <>
      <Navbar variant="primary">
        <Container>
          <Navbar.Brand>Aary Trivedi</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link active>Education</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <About />
        <Education />
        <Experience />
        <br />
        <Services />
      </Container>
      <br />
      <Footer />
    </>
  );
}

export default App;
