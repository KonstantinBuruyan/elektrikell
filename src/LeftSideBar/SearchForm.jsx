import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {convertToInputFormat, convertToRequestFormat} from "../Utils/dates";

function SearchForm({handleClose, from, until, setFrom, setUntil}) {
    const handleSubmit = (event) => {
        event.preventDefault();
       
        const from = event.target.from.value;
        const until = event.target.until.value;
       
        setFrom(convertToRequestFormat(from));
        setUntil(convertToRequestFormat(until));
        handleClose();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label placeholder="Date from"></Form.Label>
                {/*   2024-01-29*/}
                <Form.Control type="datetime-local" name="from" defaultValue={convertToInputFormat(from)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label placeholder="Date untill"></Form.Label>
                <Form.Control type="datetime-local" name="until" defaultValue={convertToInputFormat(until)} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="untilDate"> */}

            <Button className="w-100" type='submit'>Search</Button>
            {/* </Form.Group> */}

        </Form>
    );
}

export default SearchForm;