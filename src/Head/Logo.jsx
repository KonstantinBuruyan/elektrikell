import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import logo from "./electricity.png";
function Logo({ handleOpenSideBar }) {
    return (
        <>
            <Row>
                <Col className="py-1" ><img width="24" src={logo} alt="electricity logo" ></img></Col>
                <Col> <Button variant='primary' onClick={handleOpenSideBar}>Search</Button></Col>
            </Row>
        </>
    );
}

export default Logo;