import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import Logo from '../assets/images/logo.png';

export default function Header() {
    return (
        <Container className="pt-5">
            <Navbar collapseOnSelect expand="lg" className="Header rounded rounded-5 px-4">
                <Navbar.Brand href="#home">
                    <Image src={Logo} alt="Logo" height="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#trust">Trust by</Nav.Link>
                        {/* <Nav.Link href="#map">About</Nav.Link> */}
                        <Nav.Link href="#codebase">API Integration</Nav.Link>
                        <Nav.Link href="#usecase">UseCase</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto my-4 my-md-0">
                        <Button className="rounded-5 main-btn border-0">Integrate Now</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}