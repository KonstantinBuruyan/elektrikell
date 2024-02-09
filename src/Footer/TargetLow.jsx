
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../App.scss";
import Intervals from "./Intervals";
import Countdown from "react-countdown";

import { addHourToCurrentTSML } from '../Utils/dates';


function TargetLow(props) {

    const { bestUntill } = props;





    return (
        <>
            <Row className="durations">
                <Col style={{ "textAlign": "center" }}>
                    <span className="durations_title">Tahan tarbida </span>

                </Col>
            </Row >
            <Row>
                <Col><Intervals {...props} /></Col>
            </Row>
            <Row>
                <Col className="text-center p-1">
                    {bestUntill && (<Countdown date={bestUntill * 1000} className="fs-1 fw-semibold">
                        <div>This time is now!</div>
                    </Countdown>)}

                </Col>
            </Row>
        </>
    );
}

export default TargetLow;