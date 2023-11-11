import { Row, Container, Col, Image} from "react-bootstrap";
import Logo from '../../assets/images/logo.png';

export default function Footer() {
    return (
        <section className="Footer">
            <Container className="py-5">
                <Row>
                    <Col sm={12} md={6} className="mx-auto text-center">
                        <Image src={Logo} alt="logo" className="mb-3" />
                        <div className="copyright">Copyright ©2023 NONSTOPAY. | All Rights Reserved</div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}