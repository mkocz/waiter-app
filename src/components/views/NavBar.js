import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            {/* <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav> */}
            <Navbar bg="primary" variant='dark' className="rounded-2 my-2" expand="lg">
                <Container  >
                    <Navbar.Brand href="/">Waiter.App</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;