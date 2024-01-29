import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
function Canvas({ fromDate, setFromDate, untilDate, setUntilDate }) {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onClick={() => {
                setShow(true);
                console.log(`From date ${fromDate} untill date ${untilDate}`);
            }}
            >Search</Button>
            <Offcanvas show={show} onHide={() => setShow(false)} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Select date range</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="fromDate">
                            <Form.Label>From</Form.Label>
                         {/*   2024-01-29*/}
                            <Form.Control type="date" defaultValue={fromDate} onChange={(event) => setFromDate(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="untilDate">
                            <Form.Label>Until</Form.Label>
                            <Form.Control type="date" defaultValue={untilDate} onChange={(event) => setUntilDate(event.target.value)} />
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Canvas;