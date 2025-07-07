import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant='dark' className="rounded-2 my-2" expand="lg">
                <Container  >
                    <Navbar.Brand as={Link} to="/" >Waiter.App</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;