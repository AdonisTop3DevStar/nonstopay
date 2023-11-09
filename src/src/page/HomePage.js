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
import Typewriter from 'typewriter-effect';
import HeroImage from '../assets/images/animation/hero.png';
import Cloud1Image from '../assets/images/animation/cloud1.png';
import Cloud2Image from '../assets/images/animation/cloud2.png';
import Cloud3Image from '../assets/images/animation/cloud3.png';
import Cloud4Image from '../assets/images/animation/cloud4.png';
import Cloud5Image from '../assets/images/animation/cloud5.png';
import Fly1Image from '../assets/images/animation/fly1.png';
import Fly2Image from '../assets/images/animation/fly2.png';
import Fly3Image from '../assets/images/animation/fly3.png';
import GamefiImage from '../assets/images/gamefi.webp';
import NFTImage from '../assets/images/nft.webp';
import OfframpImage from '../assets/images/offramp.webp';



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
                    <Container className="py-5">
                        <Row className="align-items-center py-5">
                            <Col sm={12} md={6} className="text-md-start text-center">
                                <div className="slogan-title mb-5 text-white">
                                    <div className="subcontent">
                                        <div className="animated-text text-white">
                                            <Typewriter
                                                options={{
                                                    strings: ['LIGHTENING', 'EXPAND', 'GROWTH', 'AMPLIFY'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>Your Business Payment Processing</div></div>
                                <div className="slogan-text mb-5">Speed up your payment and  open a new page for your business today!</div>
                                <Button className="main-btn rounded-5 border-0 shadow mb-5">Integrate Now</Button>
                            </Col>
                            <Col sm={12} md={6} className="text-center">
                                <Image src={CodebaseImage} alt="hero" width="100%" className="HeroImage" />
                                {/* <iframe src="/dist/index.html" width="100%" height="550px" title="Earth"></iframe>
                                <div className="animation-image position-relative">
                                    <Image src={Cloud1Image} alt="hero" width="100" className="Cloud1Image"/>
                                    <Image src={Cloud2Image} alt="hero" width="150" className="Cloud2Image"/>
                                    <Image src={Cloud3Image} alt="hero" width="100" className="Cloud3Image"/>
                                    <Image src={Cloud4Image} alt="hero" width="150" className="Cloud4Image"/>
                                    <Image src={Cloud5Image} alt="hero" width="100" className="Cloud5Image"/>
                                    <Image src={Fly1Image} alt="hero" width="70" className="Fly1Image"/>
                                    <Image src={Fly2Image} alt="hero" width="20" className="Fly2Image"/>
                                    <Image src={Fly3Image} alt="hero" width="30" className="Fly3Image"/>

                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
            <section className="trust-section py-5" id="trust">
                <Container className="">
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

            <section className="earth-section" id="map">
                <Container className="">
                    <div className="section-title text-center mb-5">NO MIDDLEMEN, NO INTERMEDIARIES</div>
                    <div className="text-center text-white mb-5">Taking your business to scale requires it to accept payments from all over the globe. NONSTOPAY drives your expansion – fast, safe, and perfectly convenient.</div>
                    <iframe src="/earth.htm" width="100%" height="650px" title="Earth"></iframe>
                </Container>
            </section>
            <section className="codebase-section py-5" id="codebase">
                <div class="bg-container">
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                </div>
                <Container className="">
                    <div className="section-title text-center mb-5">A few lines of code, that's all</div>
                    <Row>
                        <Col sm={12} md={8} className="mx-auto">
                            <div className="code-editor-windows">
                                <div className="text-center code-editor-window-title py-2">Editor<span className="windows-controller">● ● ●</span></div>
                                <Editor
                                    height="35vh"
                                    theme="vs-dark"
                                    defaultLanguage="javascript"
                                    defaultValue={code}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bottom-bg" id="usecase">
                <section className="main-card-section py-5">
                    <Container className="">
                        <div className="section-title text-center mb-5">Use case</div>
                        <Row>
                            <Col sm={12} md={4} className="mb-3">
                                <Card className="main-card p-4">
                                    <Card.Body className="">
                                        <Card.Img src={GamefiImage} width="100%"/>
                                        <Card.Title className="mb-3">GAMEFI</Card.Title>
                                        <Card.Text>Supercharge your in-game economies with the most comprehensive crypto payment stack in the world</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4} className="mb-3">
                                <Card className="main-card p-4">
                                    <Card.Body className="">
                                    <Card.Img src={NFTImage} width="100%"/>
                                        <Card.Title className="mb-3">NFTS</Card.Title>
                                        <Card.Text>Onboard users instantly from their bank into your NFT marketplace or NFT mint-drop</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4} className="mb-3">
                                <Card className="main-card p-4">
                                    <Card.Body className="">
                                    <Card.Img src={OfframpImage} width="100%"/>
                                        <Card.Title className="mb-3">OFF-RAMP</Card.Title>
                                        <Card.Text>Discover the easiest way to cash out your crypto with GateFi's Off-Ramp solution</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="faq-section py-5" id="faq">
                    <Container className="">
                        <div className="section-title text-center mb-5">FAQs</div>
                        <Card className="faq-card p-4">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How many cryptocurrencies do you support?</Accordion.Header>
                                        <Accordion.Body>
                                            Onramp supports 300+ cryptocurrencies. You can check out the complete list of supported tokens here.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Which fiat currencies does Onramp provide support for?</Accordion.Header>
                                        <Accordion.Body>
                                            Currently Onramp supports Indian Rupee(INR), Turkish Lira(TRY), Emirati Dirham (AED), Mexican Peso (MXN),Vietnamese Dong (VND) with more currencies coming soon.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Can I subsidize fees charged to users?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes. We support dapp level fees shown to users. Dapps can absorb part or full fees on behalf of the users.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Where does onramp.money source liquidity from?</Accordion.Header>
                                        <Accordion.Body>
                                            We work with multiple liquidity providers across the globe to fetch the best rates of cryptocurrencies on Onramp.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What all integration options do you supports?</Accordion.Header>
                                        <Accordion.Body>
                                            We support:
                                            -- URL based integration (user is redirected to onramp.money page)
                                            -- Widget/iframe integration (oramp.money page opens inside dapp web page)
                                            -- White labelled integration (coming soon)
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
                <section className="register-section py-5">
                    <Container className="">
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