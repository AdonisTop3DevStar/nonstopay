import { useState } from "react";
import { Step1Img, Step2Img, Step3Img } from "../assets";
import { Row, Col, Image, Carousel } from "react-bootstrap";

export const Workflow = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="value-section">
            <Carousel slide={false}>
                <Carousel.Item>
                <Row className="workflow-banner align-items-center">
                    <Col md={3} className="workflow-banner-left d-none d-md-block">
                        <div className="step-number">01</div>
                        <div className="step-title">Submit Information</div>
                        <div className="step-subtitle">Submit Information</div>
                    </Col>
                    <Col md={6} sm={12} className="text-center"><Image src={Step1Img} width="70%" /></Col>
                    <Col md={3} className="workflow-banner-right d-none  d-md-block">
                        <div className="step-title">01</div>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row className="workflow-banner align-items-center">
                    <Col md={3} className="workflow-banner-left d-none d-md-block">
                        <div className="step-number">02</div>
                        <div className="step-title">Waiting to Process</div>
                        <div className="step-subtitle">Waiting to Process</div>
                    </Col>
                    <Col md={6} sm={12} className="text-center"><Image src={Step2Img} width="70%" /></Col>
                    <Col md={3} className="workflow-banner-right d-none  d-md-block">
                        <div className="step-title">02</div>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row className="workflow-banner align-items-center">
                    <Col md={3} className="workflow-banner-left d-none d-md-block">
                        <div className="step-number">03</div>
                        <div className="step-title">Transaction Approved</div>
                        <div className="step-subtitle">Transaction Approved</div>
                    </Col>
                    <Col md={6} sm={12} className="text-center"><Image src={Step3Img} width="70%" /></Col>
                    <Col md={3} className="workflow-banner-right d-none  d-md-block">
                        <div className="step-title">03</div>
                    </Col>
                </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}