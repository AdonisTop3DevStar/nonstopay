import { Card, Col, Container, Row, Image, Form, Button } from "react-bootstrap"
import { ParticlesBackground } from "../components/animations"
import { Logo } from "../assets"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <div className="RegisterPage position-relative">
            <ParticlesBackground />
            <Container>
                <Row className="align-items-center h-100">
                    <Col sm={12} md={4} className="mx-auto text-white">
                        <Card>
                            <Card.Body className="text-center">
                                <Link to="/"><Image src={Logo} height="50" className="mb-3" /></Link>
                                <div className="section-title mb-2">Sign Up</div>
                                <div className="text-white mb-2">Please fill in this form to create an account.</div>
                                <Form className="text-start text-white">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label >Email Address</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="" />
                                    </Form.Group>
                                </Form>
                                <div className="d-flex align-items-center justify-content-end">
                                    <Link className="nav-link text-white" to="/login">Return to Login?</Link>
                                </div>
                                <div className='text-center'>
                                    <Button className='main-btn border border-0 rounded-5 px-5 my-3'>Register</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}