import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, ERROR_MESSAGE } from "./constants";
import { useEffect,  useContext } from 'react';
import { getCurrentPrice, setActivePrice, setErrorMessage } from '../services';
import { mwToKw } from '../Utils/priceFormats';
import { useSelector, useDispatch } from 'react-redux';
import { ElektricPriceContext } from "../contexts/ElektricPriceContext";
import BadgePrice from './BadgePrice';


function Info() {
   
    const dispatch = useDispatch();

    const { values, actions:{setCurrentPrice} } = useContext(ElektricPriceContext);

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
    }, [dispatch, setCurrentPrice]);

      return (<>
        <Col>
            <div>The current price of electricity is</div>
              < BadgePrice currentPrice={values.currentPrice}/>
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
            <h2>{values.currentPrice}</h2>
            <div>cent / kilowatt-hour</div>
        </Col>
    </>);
}

export default Info;