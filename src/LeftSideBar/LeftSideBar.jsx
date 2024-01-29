import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';


function LeftSideBar({show, handleClose, fromDate, setFromDate, untilDate, setUntilDate }) {
    
    return (

        <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Select date range</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <SearchForm/>
        </Offcanvas.Body>
    </Offcanvas>
    );
}

export default LeftSideBar;