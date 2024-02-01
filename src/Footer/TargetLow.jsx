import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../App.scss";
import Intervals from "./Intervals";
import Countdown from 'react-countdown';
import { untilToMinPrice } from "../Utils/dates";



function TargetLow(props) {
    const { tillMorning, setTillMorning, priceData  } = props;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds }) => {
        // Render a countdown
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        return <p className="fs-1 fw-semibold" >{h}:{m}:{s}</p>;
    };
  
    return (
        <>
            <Row className="durations">
                <Col className="text-center">
                    <span className="durations_title">Tahan tarbida </span>
                    {/* <Button active={tillMorning} onClick={() => setTillMorning(!tillMorning)} variant="secondary">enne hommikut</Button> */}
                </Col>
            </Row >
            <Row>
                <Col><Intervals {...props} /></Col>
            </Row>
            <Row >
                <Col className="text-center p-1">
                    {/*{<Countdown date={Date.now() + 60000 * 60} renderer={renderer} />}*/}
                    < Countdown date={untilToMinPrice(priceData)} renderer={renderer} />
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;