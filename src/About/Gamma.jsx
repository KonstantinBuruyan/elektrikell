import { Container, Row, Col } from 'react-bootstrap';

function Gamma() {


    return (
        <>
            <Container className="pt-3 pb-3 d-flex flex-column justify-content-between text-center" style={{height:"90%"}} >
                <Row >
                    <Col>
                        <h1>Gamma Intelligence Training Centre</h1>
                        <hr></hr>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <p >
                            From June 2020 Gamma Intelligence Training Centre provides most actual IT-related training courses.
                            We help people to learn new digital
                            technologies, as well as we help businesses to become more digital and effective.
                            Our training rooms are located in the Centre of Tallinn, Estonia. Also we are providing real-time online courses.
                        </p>
                       
                    </Col>
                </Row>
                <Row >
                    <hr></hr>
                    <Col>
                        <dt className="mb1 text-heading-medium">
                            Website
                        </dt>
                        <dd className="mb4 t-black--light text-body-medium">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.gammatest.net/" id="ember1616" className="link-without-visited-state ember-view">
                                <span className="link-without-visited-state" dir="ltr">
                                    https://www.gammatest.net/
                                </span>
                            </a>
                        </dd>
                    </Col>
                    <Col>
                        <dt className="mb1 text-heading-medium">
                            Phone
                        </dt>
                        <dd className="mb4 t-black--light text-body-medium">
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
                        <dt className="mb1 text-heading-medium">
                            Industry
                        </dt>
                        <dd className="mb4 t-black--light text-body-medium">
                            IT Services and IT Consulting
                        </dd>
                    </Col>
                    <Col>
                        <dt className="mb1 text-heading-medium">
                            Headquarters
                        </dt>
                        <dd className="mb4 t-black--light text-body-medium">
                            Tallinn, Harjumaa
                        </dd>
                    </Col>
                    <Col>
                        <dt className="mb1 text-heading-medium">
                            Founded
                        </dt>
                        <dd className="mb4 t-black--light text-body-medium">
                            2020
                        </dd>
                    </Col>

                </Row>
            </Container>
        </>
    );
}
export default Gamma;