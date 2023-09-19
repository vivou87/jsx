
import './App.css';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";




function App() {
  let firstName="Olfa";
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Card style={{ width: "18rem" }}>
          <Image />

          <Card.Body>
            <Name />
            <Description />
          </Card.Body>

          <Card.Body>
            <Price />
          </Card.Body>
        </Card>
      </main>

      {firstName ? (
        <div>
          <h1>Hello {firstName}</h1>
          <img
            src="https://basicappleguy.com/s/HelloLight_Mac.png"
            alt=""
            width="150px"
          />
        </div>
      ) : (
        <h1>Hello there</h1>
      )}
    </div>
  );
}

export default App;
