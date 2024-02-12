import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from "../Head";
import { useSelector } from 'react-redux';


function Footer({  tillMorning, setTillMorning ,bestUntill}) {

    const activePrice = useSelector((state) => state.main.activePrice);

    return (

        <Row>
            {
                activePrice === DEFAULT_ACTIVE_BUTTON
                    ?
                    <Col><TargetLow bestUntill={bestUntill}/></Col>
                    :
                    <Col><TargetHigh /></Col>

            }
        </Row>

    )
}

export default Footer;