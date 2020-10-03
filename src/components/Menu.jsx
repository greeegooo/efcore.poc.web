import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>School</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/students">Students</Nav.Link>
                    <Nav.Link as={Link} to="/enrollments">Enrollments</Nav.Link>
                    <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;