import './home.css';
import logo from './logo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Navigate} from 'react-router-dom'

function Home() {
  const onLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };
    return (
    <>
 <Navbar className='py-3' bg="dark" variant="dark" expand="lg"> 
      <Container>
        <Navbar.Brand className='logo' href="/home">Matrix Telecom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="/home" className='active'>Home</Nav.Link>
            <Nav.Link href="/recharge">Mobile Plans</Nav.Link>
            <Nav.Link href="/broadband">Broadband</Nav.Link>       
              <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mydetails">My Details</NavDropdown.Item>
              <NavDropdown.Item href="/mymobilerechargeplans">
                My Mobile plans
              </NavDropdown.Item>
              <NavDropdown.Item href="/mybroadbandplans">
                My Broadband plans
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">
              <Link className="text-dark text-decoration-none" to='/login' onClick={() => onLogout()}>Log out</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="First slide"
            src={logo}
            height="530"
            />
          {/* <Carousel.Caption>
            <h3>One company for all your telecom need.</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Second slide" 
            src={logo}
            height="530"
            />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Third slide" 
            src={logo}
            height="530"
            />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Container className="pb-5">
       
      <Row>
        <Col>
       
     
        </Col>
      </Row>
    </Container>
    
    </>
        );
    }
    
    export default Home;