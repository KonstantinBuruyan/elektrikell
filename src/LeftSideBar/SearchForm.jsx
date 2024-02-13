import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { convertToInputFormat, convertToRequestFormat } from "../Utils/dates";
import { useSelector, useDispatch } from 'react-redux';
import { setFrom, setUntil } from '../services';

function SearchForm({ handleClose }) {
    const dispatch = useDispatch();
    const from = useSelector((state) => state.date.from);
    const until = useSelector((state) => state.date.until);
    const handleSubmit = (event) => {
        event.preventDefault();

        const start = event.target.from.value;
        const end = event.target.until.value;

        dispatch(setFrom(convertToRequestFormat(start)));
        dispatch(setUntil(convertToRequestFormat(end)));

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