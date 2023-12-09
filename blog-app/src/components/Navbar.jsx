import './Header.css'
import logo from '../logo.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
        <Navbar expand="lg">
          <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Blogs</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link" className='d-flex align-items-center contract-link'>Contract me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
         {/* Add the horizontal line here */}
      </>
    );
};

export default Header;

