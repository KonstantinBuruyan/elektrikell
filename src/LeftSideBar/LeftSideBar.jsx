import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';
import { useSelector } from 'react-redux';


function LeftSideBar({ handleClose, ...formProps }) {

    const show = useSelector((state) => state.sideBar.showSideBar);
    return (

        <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search by dates</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <SearchForm {...formProps} handleClose={handleClose}/>
        </Offcanvas.Body>
    </Offcanvas>
    );
}

export default LeftSideBar;