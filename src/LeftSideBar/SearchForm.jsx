import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
       
        const from = event.target.from.value;
        const until = event.target.from.value;
        console.log(from, until);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label placeholder="Date from"></Form.Label>
                {/*   2024-01-29*/}
                <Form.Control type="date" name="from"
                //  defaultValue={fromDate} 
                //  onChange={(event) =>
                //   setFromDate(event.target.value)
                //   }
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label placeholder="Date untill"></Form.Label>
                <Form.Control type="date" name="until"
                //  defaultValue={untilDate} 

                //  onChange={(event) => setUntilDate(event.target.value)} 
                />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="untilDate"> */}

            <Button className="w-100" type='submit'>Search</Button>
            {/* </Form.Group> */}

        </Form>
    );
}

export default SearchForm;