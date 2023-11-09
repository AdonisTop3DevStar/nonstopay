import { Container, Row, Col, Button, Image, Card, Badge, Nav, Accordion } from "react-bootstrap";
import Header from "../components/header";
import TrustIcon1 from '../assets/images/pay/nocode3.png';
import TrustIcon2 from '../assets/images/pay/exclusiv.png';
import TrustIcon3 from '../assets/images/pay/praxis.png';
import TrustIcon4 from '../assets/images/pay/softswiss.png';
import TrustIcon5 from '../assets/images/pay/soft2bet.png';
import TrustIcon6 from '../assets/images/pay/netoplpay.png';
import TrustIcon7 from '../assets/images/pay/bitandpay.png';
import TrustIcon8 from '../assets/images/pay/nftuloan.png';
import CodebaseImage from '../assets/images/codebase.png';
import LogoIcon from '../assets/images/logo.png';
import FacebookIcon from '../assets/images/facebook.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import LinkedinIcon from '../assets/images/linkedin.png';
import 'animate.css/animate.css';
import 'css-doodle';
import { useCallback } from "react";
import { MainCard } from "../components/cards";
import Editor from '@monaco-editor/react';
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";



export default function HomePage() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const code = `import { createCheckoutWithCardElement } from '@paperxyz/js-client-sdk';
    <CheckoutWithCard
    sdkClientSecret="GrUw7rkm..."
    onPaymentSuccess={(result) => console.log(result)}
    onReview={(result) => console.log(result)}
    onError={(error) => console.error(error)}
    options={{
        colorBackground: '#fefae0',
        colorPrimary: '#606c38',
        colorText: '#283618',
        borderRadius: 6,
        inputBackgroundColor: '#faedcd',
        inputBorderColor: '#d4a373',
    }}
    />;`
    return (
        <>
            <section className="top-bg">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#031013",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#27CCB8",
                            },
                            links: {
                                color: "#0D3141",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <Header id="home" />
                <section className="slogan-section py-5 position-relative">
                    <Container className="my-5 py-5">
                        <Row className="align-items-center py-5">
                            <Col sm={12} md={8} className="text-md-start text-center">
                                <div className="slogan-title mb-5 text-white">LIGHTENING  Your Business Payment Processing</div>
                                <div className="slogan-text mb-5">Speed up your payment and  open a new page for your business today!</div>
                                <Button className="main-btn rounded-5 border-0 shadow mb-5">Integrate Now</Button>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <Image src={CodebaseImage} width="100%" alt="banner" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
            <section className="trust-section py-5">
                <Container className="my-5 py-5">
                    <div className="section-title text-center mb-5">Trusted By</div>
                    <Row>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon1} width="200" alt="nocode3.xyz" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon2} width="200" alt="exclusiv.ly" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon3} width="200" alt="praxis.tech" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon4} width="200" alt="softswiss" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon5} width="200" alt="soft2bet" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon6} width="200" alt="netoplay" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon7} width="200" alt="bitandpay" /></Col>
                        <Col sm={12} md={3} className="mb-4 text-center"><Image src={TrustIcon8} width="200" alt="betterswap.io" /></Col>
                    </Row>
                </Container>
            </section>
            <section className="earth-section">
                <Container className="my-5 py-5">
                    <div className="section-title text-center mb-5">NO MIDDLEMEN, NO INTERMEDIARIES</div>
                    <iframe src="/earth.htm" width="100%" height="650px" title="Earth"></iframe>
                </Container>
            </section>
            <section className="codebase-section py-5">
                <Container className="my-5 py-5">
                    <div className="section-title text-center mb-5">A few lines of code, that's all</div>
                    <Row>
                        <Col sm={12} md={8} className="mx-auto">
                            <div className="code-editor-windows">
                                <div className="text-center code-editor-window-title py-2">Editor<span className="windows-controller">● ● ●</span></div>
                                <Editor
                                    height="30vh"
                                    theme="vs-dark"
                                    defaultLanguage="javascript"
                                    defaultValue={code}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bottom-bg">
                <section className="main-card-section py-5">
                    <Container className="my-5 py-5">
                        <div className="section-title text-center mb-5">Use case</div>
                        <Row>
                            <Col sm={12} md={4}>
                                <MainCard />
                            </Col>
                            <Col sm={12} md={4}>
                                <MainCard />
                            </Col>
                            <Col sm={12} md={4}>
                                <MainCard />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="faq-section py-5">
                    <Container className="my-5 py-5">
                        <div className="section-title text-center mb-5">FAQs</div>
                        <Card className="faq-card p-4">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How many cryptocurrencies do you support?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Which fiat currencies does Onramp provide support for?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Can I subsidize fees charged to users?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Where does onramp.money source liquidity from?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What all integration options do you supports?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
                <section className="register-section py-5">
                    <Container className="my-5 py-5">
                        <Card className="register-card py-5">
                            <Card.Body className="text-center">
                                <Card.Title className="text-center mb-5">Join the thousands of companies that use our platform</Card.Title>
                                <Button className="main-btn rounded-5 border-0 shadow">Integrate Now</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
                <section className="Footer">
                    <Container className="py-5">
                        <Row>
                            <Col sm={12} md={6} className="mx-auto text-center">
                                <Image src={LogoIcon} alt="logo" className="mb-3" />
                                <div className="d-flex aling-items-center justify-content-center mb-3">
                                    <Link to='/' className="nav-link mx-2"><Image src={FacebookIcon} alt="facebook" /></Link>
                                    <Link to='/' className="nav-link mx-2"><Image src={TwitterIcon} alt="facebook" /></Link>
                                    <Link to='/' className="nav-link mx-2"><Image src={LinkedinIcon} alt="facebook" /></Link>
                                </div>
                                <div className="copyright">Copyright ©2023 NONSTOPAY. | All Rights Reserved</div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </>
    )
}