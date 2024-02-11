import { Container, Row, Col } from 'react-bootstrap';

function Gamma() {


    return (
        <Container className="mt-3 vh-100 text-center">
            <Row className="align-items-start" >
                <Col >
                    <h1>Gamma Intelligence Training Centre</h1>
                    <hr></hr>
                </Col>
            </Row>
            <Row className="align-items-center" >
                <Col>
                    <p >
                        From June 2020 Gamma Intelligence Training Centre provides most actual IT-related training courses.
                        We help people to learn new digital
                        technologies, as well as we help businesses to become more digital and effective.
                        Our training rooms are located in the Centre of Tallinn, Estonia. Also we are providing real-time online courses.
                    </p>
                    <hr></hr>
                </Col>
            </Row>
            <Row className="align-items-end">
                <Col>
                    <dt >
                        Website
                    </dt>
                    <dd >
                        <a rel="noopener noreferrer" target="_blank" href="https://www.gammatest.net/" id="ember1616" className="link-without-visited-state ember-view">
                            <span className="link-without-visited-state" dir="ltr">
                                https://www.gammatest.net/
                            </span>
                        </a>
                    </dd>
                </Col>
                <Col>
                    <dt >
                        Phone
                    </dt>
                    <dd >
                        <a rel="noopener noreferrer" target="_blank" href="tel:37255581521" id="ember1617" className="link-without-visited-state ember-view">
                            <span aria-hidden="true" className="link-without-visited-state" dir="ltr">
                                37255581521
                            </span>
                            <span className="visually-hidden">
                                Phone number is 37255581521
                            </span>
                        </a>
                    </dd>
                </Col>
                <Col>
                    <dt >
                        Industry
                    </dt>
                    <dd>
                        IT Services and IT Consulting
                    </dd>
                </Col>
                <Col>
                    <dt >
                        Headquarters
                    </dt>
                    <dd >
                        Tallinn, Harjumaa
                    </dd>
                </Col>
                <Col>
                    <dt>
                        Founded
                    </dt>
                    <dd >
                        2020
                    </dd>
                </Col>

            </Row>
        </Container>
    );
}
export default Gamma;