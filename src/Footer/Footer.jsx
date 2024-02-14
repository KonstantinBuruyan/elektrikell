import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TargetLow from './TargetLow';
import TargetHigh from './TargetHigh';
import { DEFAULT_ACTIVE_BUTTON } from "../Head";
import { useSelector } from 'react-redux';


function Footer() {

    const activePrice = useSelector((state) => state.main.activePrice);

    return (

        <Row>
            {
                activePrice === DEFAULT_ACTIVE_BUTTON
                    ?
                    <Col><TargetLow /></Col>
                    :
                    <Col><TargetHigh /></Col>

            }
        </Row>

    )
}

export default Footer;