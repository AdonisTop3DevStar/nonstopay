import { Container, Row, Col, Button, Image, Card, Nav } from "react-bootstrap";
import TrustIcon1 from '../assets/images/pay/nocode3.png';
import TrustIcon2 from '../assets/images/pay/exclusiv.png';
import TrustIcon3 from '../assets/images/pay/praxis.png';
import TrustIcon4 from '../assets/images/pay/softswiss.png';
import TrustIcon5 from '../assets/images/pay/soft2bet.png';
import TrustIcon6 from '../assets/images/pay/netoplpay.png';
import TrustIcon7 from '../assets/images/pay/bitandpay.png';
import TrustIcon8 from '../assets/images/pay/nftuloan.png';
import { MainCard } from "../components/cards";
import Typewriter from 'typewriter-effect';
import "react-multi-carousel/lib/styles.css";
import { CodeEditor } from "../components/layout/codebase";
import { BannerAnimation, FramerBackground, ParticlesBackground } from "../components/animations";
import { NewsCardCarousel, PaymentCardCarousel } from "../components/carousels";
import { FAQAccordionData, MainCardData, NewsData, PaymentMethodData } from "../assets/contents";
import { MainButton, SectionTitle } from "../components";
import { FAQAccordion } from "../components/accordion";
import Footer from "../components/layout/footer";
import { Workflow } from "../components/workflow";
import { useEffect, useState } from "react";
import axios from "axios";
import parser from 'xml2js';




export default function HomePage() {
    const [NewsData, setNewsData] = useState([]);

    const getNewsData = async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://localhost:5000/https://www.youtube.com/feeds/videos.xml?channel_id=UCIALMKvObZNtJ6AmdCLP7Lg',
            headers: {
                'accept': 'application/json'
            }
        };

       

        function formatDay(inputDateString) {
            const date = new Date(inputDateString);
          
            const dayOptions = { 
              day: 'numeric'
            };
            return date.toLocaleDateString('en-US', dayOptions);
          }
        function formatDate(inputDateString) {
            const date = new Date(inputDateString);
          
            const dateOptions = { 
              month: 'long', 
              year: 'numeric' 
            };
          
            return date.toLocaleDateString('en-US', dateOptions)
          }

        axios.request(config)
            .then((response) => {
                const xmlData = response.data;
                parser.parseString(xmlData, (err, result) => {
                    if (err) {
                        console.error('Error parsing XML:', err);
                    } else {
                        // Now 'result' is the JSON representation of the XML
                        console.log(result.feed);
                        let data = [];
                        for (let i = 0; i < result.feed.entry.length; i++) {
                              let _data = {
                                  title : result.feed.entry[i]['media:group'][0]['media:title'][0], 
                                  description : result.feed.entry[i]['media:group'][0]['media:description'][0], 
                                  day: formatDay(result.feed.entry[1]['published'][0]), 
                                  date: formatDate(result.feed.entry[1]['published'][0]) ,
                                  image: result.feed.entry[i]['media:group'][0]['media:thumbnail'][0].$.url
                                }
                            data.push(_data);
                        }
                        setNewsData(data);
                    }
                });
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <>
            <section className="top-bg" id="home">
                <ParticlesBackground />
                <section className="slogan-section py-5 position-relative">
                    <Container className="py-5">
                        <Row className="align-items-center py-5">
                            <Col sm={12} md={6} className="text-md-start text-center">
                                <div className="slogan-title mb-4 text-white">
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
                                    <div>your Business with us!</div></div>
                                <div className="slogan-text mb-4">Discover the ultimate payment processing and our lightning-live settlements</div>
                                <Nav.Link target="_black" href='https://usdc.nonstopay.net/signup' ><Button className="main-btn border-0 rounded-5 px-5 py-2 mb-5">Integrate Now</Button></Nav.Link>
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
            <section className="trust-section py-5 position-relative" id="trust">
                <Container className="">
                    <SectionTitle title="Trusted By" />
                    <Row className="align-items-center position-relative">
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
            <section className="workflow-section py-5 position-relative" id="workflow">
                <Container>
                    <SectionTitle title="HOW IT WORKS?" />
                    <Workflow />
                    <div className="text-center">
                        <MainButton title="Integrate API" />
                    </div>
                </Container>
            </section>
            <section className="earth-section py-5 position-relative" id="map">
                <Container className="">
                    <SectionTitle title="NO MIDDLEMEN, NO INTERMEDIARIES" />
                    <div className="text-center text-white mb-5 fs-4">Taking your business to scale requires it to accept payments from all over the globe. NONSTOPAY drives your expansion – 154 countries, 65 payments method, Global coverage</div>
                    <iframe src="/earth.htm" width="100%" height="650px" title="Earth"></iframe>
                </Container>
            </section>
            <section className="codebase-section py-5 position-relative" id="codebase">
                <FramerBackground />
                <Container className="">
                    <SectionTitle title="A few lines of code, that's all" />
                    <Row>
                        <Col sm={12} md={8} className="mx-auto">
                            <CodeEditor />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <MainButton title="Integrate Now" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bottom-bg position-relative mt-5 pt-5" id="usecase">
                <section className="main-card-section py-5">
                    <Container className="">
                        <SectionTitle title="Use case" />
                        <Row className="align-items-center">
                            {
                                MainCardData.map((item, index) => (
                                    <Col sm={12} md={4} className="mb-5 px-3 use-case-list">
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
                                <MainButton title="Integrate Now" />
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
                <Footer />
            </section>
        </>
    )
}