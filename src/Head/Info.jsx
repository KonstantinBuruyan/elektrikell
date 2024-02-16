import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState, useContext, useMemo } from 'react';
import { getCurrentPrice, setActivePrice, setErrorMessage } from '../services';
import { mwToKw } from '../Utils/priceFormats';
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from 'react-redux';
import { ElektricPriceContext } from "../contexts/ElektricPriceContext";


function Info() {
    const [currentPrice, setCurrentPrice] = useState(0);
    const dispatch = useDispatch();

    const { values } = useContext(ElektricPriceContext);

    const activePrice = useSelector((state) => state.main.activePrice);
    

    useEffect(() => {
        (async () => {
            try {
                const { data, success } = await getCurrentPrice();

                if (!success) throw new Error();

                setCurrentPrice(mwToKw(data[0].price));
            }
            catch {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }
        })()
    }, [dispatch]);

    const badge = useMemo(() => getBadge(values.averagePrice, currentPrice ), [values.averagePrice, currentPrice]);

    function getBadge(avgPrice, activePrice) {

        const upperAverageThreshold = avgPrice * 1.25; //upper threshold is greater on 25 percentage from average price
        const lowAverageThreshold = avgPrice * 0.75; //low threshold is less on 25 percentage from average price

        // average price by default. Average range is within 25% up and down from average price
        const b = { name: BADGES[1].name, id: BADGES[1].id };

        //if current price is greater than upper threshold is high price
        if (activePrice > upperAverageThreshold) {
            b.name = BADGES[2].name;
            b.id = BADGES[2].id;
        }
        //if current price is lesser than low threshold is low price
        else if (activePrice < lowAverageThreshold) {
            b.name = BADGES[0].name;
            b.id = BADGES[0].id;
        }

        return b;
    }

    return (<>
        <Col>
            <div>The current price of electricity is</div>
            <Badge bg={badge.name}>{badge.id}</Badge>
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