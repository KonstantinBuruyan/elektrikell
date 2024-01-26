import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';


function Footer({ activePrice, setActivePrice, tillMorning, setTillMorning }) {
    return (<>

        <Row>
            {
                activePrice === "low"
                    ?
                    <Col><TargetLow tillMorning={tillMorning} setTillMorning={setTillMorning} /></Col>
                    :
                    <Col><TargetHigh /></Col>

            }
        </Row>

    </>)
}

export default Footer;