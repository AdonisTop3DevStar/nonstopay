import { Step1Img, Step2Img, Step3Img } from "../assets";
import { Row, Col, Image } from "react-bootstrap";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Workflow = () => {
    // useEffect(() => {
    //     // Register GSAP plugins
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Animation function
    //     function createTimeline() {
    //         let sections = gsap.utils.toArray(".workflow-banner");
    //         let container = document.querySelector(".container-sliders-wrapper");
    //         const stagger = 1;

    //         const timeline = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".workflow-section",
    //                 pin: true,
    //                 scrub: 1,
    //                 // snap: 1 / (sections.length - 1),
    //                 end: () => "+=" + container.offsetWidth,
    //                 markers: true
    //             }
    //         });

    //         // Image animation in and out
    //         timeline.from(
    //             ".workflow-banner img",
    //             {
    //                 yPercent: 100,
    //                 ease: "none",
    //                 stagger: {
    //                     each: 1
    //                 }
    //             },
    //             "0" // Start at the beginning of the timeline 
    //         );

    //         timeline.to(
    //             ".workflow-banner img",
    //             {
    //                 yPercent: -100,
    //                 ease: "none",
    //                 stagger: {
    //                     each: stagger
    //                 }
    //             },
    //             "1" // Wait until the first element in the stagger has played
    //         );

    //         // Text animation in and out
    //         // timeline.from(
    //         //     ".workflow-banner img",
    //         //     {
    //         //         yPercent: 100,
    //         //         opacity: 0,
    //         //         ease: "none",
    //         //         stagger: {
    //         //             each: 1
    //         //         }
    //         //     },
    //         //     "0" // Start at the beginning of the timeline 
    //         // );

    //         // timeline.to(
    //         //     ".workflow-banner img",
    //         //     {
    //         //         yPercent: -100,
    //         //         opacity: 0,
    //         //         ease: "none",
    //         //         stagger: {
    //         //             each: stagger
    //         //         }
    //         //     },
    //         //     "1" // Wait until the first element in the stagger has played
    //         // );
    //     }

    //     // Call the animation function
    //     createTimeline();
    // }, []);
    const component = useRef();
  const slider = useRef();

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".workflow-banner");
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//         //   end: () => "+=" + slider.current.offsetWidth,
//           markers: true
//         }
//       });
//     }, component);
//     return () => ctx.revert();
//   });
    return (
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
                <Row className="workflow-banner align-items-center">
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
                </Row>
            </div>
        </div>
    )
}