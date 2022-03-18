import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Services from './Components/Services';

class App extends Component {

  aboutRef = React.createRef();
  educationRef = React.createRef();
  experienceRef = React.createRef();
  serviceRef = React.createRef();
  contactRef = React.createRef();

  navigate = (e) => {
    let { name } = e.target;
    this[name + "Ref"].current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <>
        <Navbar bg="white" variant="primary">
          <Container>
            <Navbar.Brand>Aary Trivedi</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link name="education" onClick={this.navigate}>Education</Nav.Link>
              <Nav.Link name="experience" onClick={this.navigate}>Experience</Nav.Link>
              <Nav.Link name="service" onClick={this.navigate}>Services</Nav.Link>
              <Nav.Link name="contact" onClick={this.navigate}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div ref={this.aboutRef}>
          <About navigate={this.navigate} />
        </div>
        <Container>
          <div className="mt-3" ref={this.educationRef}>
            <Education />
          </div>
          <div className="mt-3" ref={this.experienceRef}>
            <Experience />
          </div>
          <br />
          <div className="mt-3" ref={this.serviceRef}>
            <Services />
          </div>
        </Container>
        <br />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
