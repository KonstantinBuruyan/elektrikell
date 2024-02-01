import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from "../Head";


function Footer({ activePrice, setActivePrice, tillMorning, setTillMorning, activeHour, setActiveHour, priceData }) {
    return (

        <Row>
            {
                activePrice === DEFAULT_ACTIVE_BUTTON
                    ?
                    <Col><TargetLow activeHour={activeHour} setActiveHour={setActiveHour} tillMorning={tillMorning} setTillMorning={setTillMorning} priceData={priceData} /></Col>
                    :
                    <Col><TargetHigh /></Col>

            }
        </Row>

    )
}

export default Footer;