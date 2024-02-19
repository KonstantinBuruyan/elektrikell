import { useEffect, useState, useContext } from "react";
import { getPriceData, setErrorMessage, setBestUntil, setIsDataLoaded } from "../services";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, ReferenceArea, ReferenceLine } from 'recharts';
import { chartDataConvertor } from "../Utils";
import { getLowPriceInterval } from "../Utils/buildIntervals";
import lodash from "lodash";
import { getAveragePice } from "../Utils/math";
import { ERROR_MESSAGE } from "./constants";
import { RenderDots, RenderTooltip, RenderTick } from "./Chart";
import { useSelector, useDispatch } from 'react-redux';
import { ElektricPriceContext } from "../contexts/ElektricPriceContext";


function Body() {


    const activeHour = useSelector((state) => state.main.activeHour);

    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const dispatch = useDispatch();

    const { values, actions: { setAveragePrice } } = useContext(ElektricPriceContext);



    const from = useSelector((state) => state.date.from);
    const until = useSelector((state) => state.date.until);

    useEffect(() => {
        dispatch(setIsDataLoaded(false));
        getPriceData(from, until).then(({ data, success }) => {


            if (!success) throw new Error();

            const priceData = chartDataConvertor(data.ee);

            setPriceData(priceData);

            setAveragePrice(getAveragePice(priceData));

        }).catch(error => {

            console.log(error);
            return dispatch(setErrorMessage(ERROR_MESSAGE));
        })
            .finally(() => dispatch(setIsDataLoaded(true)));
    }, [from, until, dispatch, setAveragePrice]);


    useEffect(() => {
        dispatch(setIsDataLoaded(false));
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);
        dispatch(setIsDataLoaded(true));
        if (lowPriceIntervals) {

            setX1(lowPriceIntervals.x1);
            setX2(lowPriceIntervals.x2);
            dispatch(setBestUntil(lowPriceIntervals));
        }
    }, [priceData, activeHour, dispatch]);



    return (

        <Row>
            <Col>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}  >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis xAxisId="0" dataKey="hour" interval={1} />
                        <XAxis xAxisId="1" dataKey="day" tick={<RenderTick data={priceData} />} interval={0} tickLine={false} axisLine={false} />
                        <XAxis xAxisId="2" dataKey="timestamp" hide={true} />
                        <YAxis />
                        <Tooltip content={<RenderTooltip />} />
                        <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={<RenderDots />} strokeWidth="2" />
                        <ReferenceArea xAxisId="2" x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />
                        <ReferenceLine y={values.averagePrice} label="Average" stroke="grey" strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;