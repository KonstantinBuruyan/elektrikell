import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../App.scss";
import Intervals from "./Intervals";


function TargetLow({tillMorning, setTillMorning }) {
    return (
        <>
            <Row className="durations">
                <Col style={{"textAlign":"center"}}>
                <span className="durations_title">Tahan tarbida </span>
                    <Button active={tillMorning} onClick={() => setTillMorning(!tillMorning)} variant="secondary">enne hommikut</Button>
                </Col>
            </Row >
            <Row>
                <Col><Intervals /></Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
        </>
    );
}

export default TargetLow;