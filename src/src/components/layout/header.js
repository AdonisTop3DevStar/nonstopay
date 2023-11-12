import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import Logo from '../../assets/images/logo.png';

export default function Header() {
    return (
        <Container className="pt-5" id="home" >
            <Navbar collapseOnSelect expand="lg" className="Header rounded rounded-5 px-4">
                <Navbar.Brand href="#home">
                    <Image src={Logo} alt="Logo" height="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-none d-md-flex">
                        <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
                        <Nav.Link href="#trust" className="mx-3">Trust by</Nav.Link>
                        <Nav.Link href="#workflow" className="mx-3">Workflow</Nav.Link>
                        <Nav.Link href="#codebase" className="mx-3">API Integration</Nav.Link>
                        <Nav.Link href="#usecase" className="mx-3">UseCase</Nav.Link>
                        <Nav.Link href="#faq" className="mx-3">FAQ</Nav.Link>
                        <Nav.Link href="#contact" className="mx-3">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto my-4 my-md-0">
                        <Button className="rounded-5 main-btn border-0">Integrate Now</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}