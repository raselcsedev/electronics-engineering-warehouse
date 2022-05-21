import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">Electronics Engineering</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="products">Products</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            user && <>
                            <Nav.Link as={Link} to="manageProduct">Manage Item</Nav.Link>
                            <Nav.Link as={Link} to="allProduct">All Items</Nav.Link>
                            <Nav.Link as={Link} to="addProduct">Add Item</Nav.Link>

                            </>
                        }
                            {
                                user?
                                <button className='btn btn-link text-white-50 text-decoration-none text-start   ps-0' onClick={handleLogout}>Logout</button>

                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;