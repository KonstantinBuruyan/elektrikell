import Logo from "./Logo";
import Info from "./Info";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Canvas from "./Canvas";



function Head(props) {

    return (<>
        <Row className="align-items-center" >
            <Col md="auto" ><Logo /></Col>
            <Col md="auto" ><Canvas {...props} /></Col>
        </Row>
        <Row>
            <Info {...props} />
        </Row>
    </>)
}

export default Head;