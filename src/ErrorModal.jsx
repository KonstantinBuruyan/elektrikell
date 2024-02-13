import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage } from "./services";
function ErrorModal({ show, handleClose }) {
    const errorMessage = useSelector((state) => state.error.errorMessage);
    const dispatch = useDispatch();
    return (
        <Modal show={!!errorMessage} onHide={handleClose}>
           
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{errorMessage}</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch( setErrorMessage(null))}>Close</Button>
                </Modal.Footer>
           
        </Modal>
    );
}

export default ErrorModal;