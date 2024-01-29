import Logo from "./Logo";
import Info from "./Info";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Head(props) {
    const {handleOpenSideBar, ...restProps} = props;

    return (<>
        <Row className="align-items-center" >
            <Col md="auto" ><Logo  handleOpenSideBar={handleOpenSideBar}/></Col>
        </Row>
        <Row>
            <Info {...restProps} />
        </Row>
    </>)
}

export default Head;