import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import { getCurrentPrice, setActivePrice } from '../services';
import { mwToKw } from '../Utils/priceFormats';
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from 'react-redux';


function Info({ setErrorMessage }) {
    const [currentPrice, setCurrentPrice] = useState(0);
    const dispatch = useDispatch();

    const activePrice = useSelector((state) => state.main.activePrice);

    useEffect(() => {
        (async () => {
            try {
                const { data, success } = await getCurrentPrice();

                if (!success) throw new Error();

                setCurrentPrice(mwToKw(data[0].price));
            }
            catch {
                setErrorMessage(ERROR_MESSAGE);
            }
        })()
    }, [setErrorMessage]);
    return (<>
        <Col>
            <div>The current price of electricity is</div>
            <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
            {/* <Badge bg="danger">Danger</Badge> */}
        </Col>
        <Col>
            <ButtonGroup >
                {PRICE_BUTTONS.map(({ name, id }) => (
                    <Button key={id} active={activePrice === id} onClick={() => dispatch(setActivePrice(id))} variant="secondary">{name}</Button>
                ))}
                {/* <Button variant="secondary">Low price</Button>
      <Button variant="secondary">High price</Button> */}
            </ButtonGroup>
        </Col>
        <Col className='text-end'>
            <h2>{currentPrice}</h2>
            <div>cent / kilowatt-hour</div>
        </Col>
    </>);
}

export default Info;