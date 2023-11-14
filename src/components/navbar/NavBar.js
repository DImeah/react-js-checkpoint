// Imports from react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";

// A function to  render the Navbar
function navbar() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Le Chef Cuisine</Navbar.Brand>
          <Stack direction="horizontal" gap={3}>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Stack>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default navbar;
