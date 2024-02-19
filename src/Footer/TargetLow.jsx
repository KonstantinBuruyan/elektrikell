
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../App.scss";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';


function TargetLow(props) {


    const bestUntil = useSelector((state) => state.best.bestUntil);
    const countdownRef = useRef(null);


    useEffect(() => {

        if (bestUntil && countdownRef?.current) {
            countdownRef.current.start();
        }

    }, [bestUntil]);

    return (
        <>
            <Row className="durations">
                <Col className="text-center">
                    <span className="durations_title">Want to consume</span>

                </Col>
            </Row >
            <Row>
                <Col><Intervals {...props} /></Col>
            </Row>
            <Row>
                <Col className="text-center p-1">
                    {bestUntil != null ?
                        <>
                            {bestUntil.isNow ?
                                <>
                                    <div>The best time for that</div>
                                    <div className='fs-1 fw-semibold'>CURRENTLY</div>
                                    <div>Later, all prices will be more expensive</div>
                                </> :
                                <>
                                    <div>The best time for this is {bestUntil.bestTime}, which is left</div>
                                    <Countdown date={bestUntil.countDownMS} ref={countdownRef} autoStart={false} className="fs-1 fw-semibold" daysInHours={true}></Countdown>
                                    <div>Then the price per kilowatt hour will be {bestUntil.averagePrice} cents, which is {bestUntil.deltaPercent}% {bestUntil.isCheap ? "cheaper" : "more expensive"} than it is now</div>
                                </>}
                        </> : <div></div>
                    }
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;