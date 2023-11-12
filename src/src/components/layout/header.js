import { useState } from 'react';
import { Navbar, Container, Nav, Image, Button, Modal, Form } from "react-bootstrap";
import Logo from '../../assets/images/logo.png';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="pt-5" id="home" >
            <Navbar collapseOnSelect expand="lg" className="Header rounded rounded-5 px-4">
                <Navbar.Brand href="#home">
                    <Image src={Logo} alt="Logo" height="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-none d-md-flex">
                        <Nav.Link href="#trust" className="mx-3">Trust by</Nav.Link>
                        <Nav.Link href="#workflow" className="mx-3">Workflow</Nav.Link>
                        <Nav.Link href="#codebase" className="mx-3">API Integration</Nav.Link>
                        <Nav.Link href="#usecase" className="mx-3">UseCase</Nav.Link>
                        <Nav.Link href="#faq" className="mx-3">FAQ</Nav.Link>
                        <Nav.Link onClick={handleShow} className="mx-3">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto my-4 my-md-0">
                        <Nav.Link target="_black" href='https://usdc.nonstopay.net/signup' className="rounded-5 main-btn border-0 px-3">Integrate Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <div className='text-center'>
                        <Button onClick={handleClose} className='main-btn border border-0 rounded-5 px-5 my-3'>Submit</Button>
                    </div>
                </Modal.Body>                
            </Modal>
        </Container>
    )
}