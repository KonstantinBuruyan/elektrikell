import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about/me" className="nav-link">Me</Link>
                    <Link to="/about/gamma" className="nav-link">Gamma</Link>
                    <Link to="/lowprice/8" className="nav-link">Low price 8h</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;