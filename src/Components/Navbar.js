import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/movies">Movies</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
