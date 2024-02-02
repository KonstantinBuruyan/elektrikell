
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../App.scss";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { addHourToCurrentTSML } from '../Utils/dates';


function TargetLow(props) {
    const {tillMorning,setTillMorning} = props;
    const countDownDate= addHourToCurrentTSML();

    return (
        <>
            <Row className="durations">
                <Col style={{"textAlign":"center"}}>
                <span className="durations_title">Tahan tarbida </span>
                    {/* <Button active={tillMorning} onClick={() => setTillMorning(!tillMorning)} variant="secondary">enne hommikut</Button> */}
                </Col>
            </Row >
            <Row>
                <Col><Intervals {...props} /></Col>
            </Row>
            <Row>
                <Col>
                <Countdown date={countDownDate}>
                <div>This time is now!</div>
                </Countdown>
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;