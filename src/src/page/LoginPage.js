import { Card, Col, Container, Row, Image, Form, Button } from "react-bootstrap"
import { ParticlesBackground } from "../components/animations"
import { Logo } from "../assets"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <div className="LoginPage position-relative">
            <ParticlesBackground />
            <Container>
                <Row className="align-items-center h-100">
                    <Col sm={12} md={4} className="mx-auto text-white">
                        <Card>
                            <Card.Body className="text-center">
                                <Link to="/"><Image src={Logo} height="50" className="mb-3" /></Link>
                                <div className="section-title mb-2">Login</div>
                                <div className="text-white mb-2">Welcome back! Login to access your Nonstopay account.</div>
                                <Form className="text-start text-white">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label >Email Address</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="" />
                                    </Form.Group>
                                </Form>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <Link className="nav-link text-white" to="/forgot-password">Did you forget your password?</Link>
                                    <Link className="nav-link text-white" to="/signup">Sign Up</Link>
                                </div>
                                <div className='text-center'>
                                    <Button className='main-btn border border-0 rounded-5 px-5 my-3'>Log In</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}