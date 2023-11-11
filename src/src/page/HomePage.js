import { Container, Row, Col, Button, Image, Card, Accordion } from "react-bootstrap";
import TrustIcon1 from '../assets/images/pay/nocode3.png';
import TrustIcon2 from '../assets/images/pay/exclusiv.png';
import TrustIcon3 from '../assets/images/pay/praxis.png';
import TrustIcon4 from '../assets/images/pay/softswiss.png';
import TrustIcon5 from '../assets/images/pay/soft2bet.png';
import TrustIcon6 from '../assets/images/pay/netoplpay.png';
import TrustIcon7 from '../assets/images/pay/bitandpay.png';
import TrustIcon8 from '../assets/images/pay/nftuloan.png';
import 'animate.css/animate.css';
import 'css-doodle';
import { MainCard} from "../components/cards";
import Typewriter from 'typewriter-effect';
import "react-multi-carousel/lib/styles.css";
import { CodeEditor } from "../components/layout/codebase";
import { BannerAnimation, FramerBackground, ParticlesBackground } from "../components/animations";
import { NewsCardCarousel, PaymentCardCarousel } from "../components/carousels";
import { FAQAccordionData, MainCardData, NewsData, PaymentMethodData } from "../assets/contents";
import { MainButton, SectionTitle } from "../components";
import { FAQAccordion } from "../components/accordion";
import Footer from "../components/layout/footer";
// import { Workflow } from "../components/workflow";
import { Step1Img} from "../assets";



export default function HomePage() {

    return (
        <>
            <section className="top-bg">
                <ParticlesBackground />
                <section className="slogan-section py-5 position-relative">
                    <Container className="py-5">
                        <Row className="align-items-center py-5">
                            <Col sm={12} md={6} className="text-md-start text-center">
                                <div className="slogan-title mb-5 text-white">
                                    <div className="subcontent">
                                        <div className="animated-text text-white">
                                            <Typewriter
                                                options={{
                                                    strings: ['LIGHTNING', 'EXPAND', 'GROWTH', 'AMPLIFY'],
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
                                <BannerAnimation />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="text-center">
                                <PaymentCardCarousel data={PaymentMethodData} />
                                <div className="sub-slogan-title my-5 text-white">FUEL YOUR BUSINESS WITH USDC</div>
                                <MainButton title="Start Now" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
            <section className="trust-section py-5" id="trust">
                <Container className="">
                    <SectionTitle title="Trusted By" />
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
            <section className="workflow-section py-5" id="workflow">
                <Container>
                    <SectionTitle title="HOW IT WORKS?" />
                    <div className="value-section">
                        <div className="container-sliders-wrapper">
                            <Row className="workflow-banner align-items-center">
                                <Col md={3} className="workflow-banner-left d-none d-md-block">
                                    <div className="step-number">01</div>
                                    <div className="step-title">Submit Information</div>
                                    <div className="step-subtitle">Submit Information</div>
                                </Col>
                                <Col md={6} sm={12} className="text-center"><Image src={Step1Img} width="100%" /></Col>
                                <Col md={3} className="workflow-banner-right d-none  d-md-block">
                                    <div className="step-title">01</div>
                                </Col>
                            </Row>
                            {/* <Row className="workflow-banner align-items-center">
                                <Col md={3} className="workflow-banner-left d-none d-md-block">
                                    <div className="step-number">02</div>
                                    <div className="step-title">Waiting to Process</div>
                                    <div className="step-subtitle">Waiting to Process</div>
                                </Col>
                                <Col md={6} sm={12} className="text-center"><Image src={Step2Img} className="w-100" /></Col>
                                <Col md={3} className="workflow-banner-right d-none  d-md-block">
                                    <div className="step-title">02</div>
                                </Col>
                            </Row>
                            <Row className="workflow-banner align-items-center">
                                <Col md={3} className="workflow-banner-left d-none d-md-block">
                                    <div className="step-number">03</div>
                                    <div className="step-title">Transaction Approved</div>
                                    <div className="step-subtitle">Transaction Approved</div>
                                </Col>
                                <Col md={6} sm={12} className="text-center"><Image src={Step3Img} className="w-100" /></Col>
                                <Col md={3} className="workflow-banner-right d-none  d-md-block">
                                    <div className="step-title">03</div>
                                </Col>
                            </Row> */}
                        </div>
                    </div>
                    <div className="text-center">
                        <MainButton title="Integrate API" />
                    </div>
                </Container>
            </section>
            <section className="earth-section" id="map">
                <Container className="">
                    <SectionTitle title="NO MIDDLEMEN, NO INTERMEDIARIES" />
                    <div className="text-center text-white mb-5">Taking your business to scale requires it to accept payments from all over the globe. NONSTOPAY drives your expansion – fast, safe, and perfectly convenient.</div>
                    <iframe src="/earth.htm" width="100%" height="650px" title="Earth"></iframe>
                </Container>
            </section>
            <section className="codebase-section py-5 overflow-hidden" id="codebase">
                <FramerBackground />
                <Container className="">
                    <SectionTitle title="A few lines of code, that's all" />
                    <Row>
                        <Col sm={12} md={8} className="mx-auto">
                            <CodeEditor />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bottom-bg" id="usecase">
                <section className="main-card-section py-5">
                    <Container className="">
                        <SectionTitle title="Use case" />
                        <Row className="align-items-center">
                            {
                                MainCardData.map((item, index) => (
                                    <Col sm={12} md={4} className="mb-5 px-3">
                                        <MainCard title={item.title} description={item.description} image={item.image} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
                <section className="news-section py-5">
                    <Container>
                        <SectionTitle title="Latest News" />
                        <NewsCardCarousel data={NewsData} />
                    </Container>
                </section>
                <section className="faq-section py-5" id="faq">
                    <Container className="">
                        <SectionTitle title="FAQs" />
                        <Card className="faq-card p-4">
                            <Card.Body>
                                <FAQAccordion data={FAQAccordionData} />
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
                <Footer />
            </section>
        </>
    )
}