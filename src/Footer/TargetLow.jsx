
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../App.scss";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';


function TargetLow(props) {


    const bestUntill = useSelector((state) => state.best.bestUntill);
    const countdownRef = useRef(null);

    useEffect(() => {
       
        if (bestUntill && countdownRef.current) {
            countdownRef.current.start();
        }

    }, [bestUntill]);



    return (
        <>
            <Row className="durations">
                <Col className="text-center">
                    <span className="durations_title">Tahan tarbida </span>

                </Col>
            </Row >
            <Row>
                <Col><Intervals {...props} /></Col>
            </Row>
            <Row>
                <Col className="text-center p-1">
                    {/*<div>The best time for this is {props.countdownDataContext.bestTime}, which is left</div>*/}
                    {bestUntill && (<Countdown date={bestUntill * 1000} ref={countdownRef} autoStart={false} className="fs-1 fw-semibold" >
                        <div>This time is now!</div>
                    </Countdown>)}

                </Col>
            </Row>
        </>
    );
}

export default TargetLow;