import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from "../Head";


function Footer({ activePrice, setActivePrice, tillMorning, setTillMorning, activeHour ,setActiveHour  ,bestUntill}) {
    return (

        <Row>
            {
                activePrice === DEFAULT_ACTIVE_BUTTON
                    ?
                    <Col><TargetLow  activeHour={activeHour} setActiveHour={setActiveHour} bestUntill={bestUntill}/></Col>
                    :
                    <Col><TargetHigh /></Col>

            }
        </Row>

    )
}

export default Footer;