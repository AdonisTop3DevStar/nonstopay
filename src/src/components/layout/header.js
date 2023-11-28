import { useState } from 'react';
import { Navbar, Container, Nav, Image, Button, Modal, Form } from "react-bootstrap";
import Logo from '../../assets/images/logo.png';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
    const [show, setShow] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        handleClose();
        if (fullName == '' || email == '' || message == '') {
            toast.error("Please input informations.");
            return;
        }
        let headers = {
            'accept': 'application/json', 
            'Content-Type': 'application/json'
        }

        let data = {
            fullName: fullName,
            email: email,
            message: message
        };

        try {
            const response = await axios.post(`https://www.nonstopay.net/sendMail.php`, data, {headers});
            console.log(response.data);
            toast.success(response.data.errorMessage);
        } catch (error) {
            console.error(error);
        }

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="pt-5">
            <ToastContainer />
            <Navbar expand="lg" className="Header rounded rounded-5 px-4">
                <Navbar.Brand href="#home">
                    <Image src={Logo} alt="Logo" height="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-md-flex">
                        <Nav.Link href="#trust" className="mx-3">Trust by</Nav.Link>
                        <Nav.Link href="#workflow" className="mx-3">Workflow</Nav.Link>
                        <Nav.Link href="#codebase" className="mx-3">API Integration</Nav.Link>
                        <Nav.Link href="#usecase" className="mx-3">UseCase</Nav.Link>
                        <Nav.Link href="#faq" className="mx-3">FAQ</Nav.Link>
                        <Nav.Link onClick={handleShow} className="mx-3">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto my-4 my-md-0">
                        <Nav.Link target="_black" href="https://usdc.nonstopay.net/login" className='text-center nav-link' ><Button className="border-0 rounded-5 px-4 py-2 login-btn">Login</Button></Nav.Link>
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
                            <Form.Control type="text" placeholder="Enter Your Full Name" value={fullName} onChange={(e)=> setFullName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={(e)=> setMessage(e.target.value)}/>
                        </Form.Group>
                    </Form>
                    <div className='text-center'>
                        <Button onClick={sendMessage} className='main-btn border border-0 rounded-5 px-5 my-3' >Submit</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}