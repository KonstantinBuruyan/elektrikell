import { useEffect, useState, useMemo } from "react";
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


function Body() {

   
    const activeHour = useSelector((state) => state.main.activeHour);

    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const dispatch = useDispatch();

    
    const averagePrice = useMemo(() => {
        return getAveragePice(priceData);

    }, [priceData]);

    const from = useSelector((state) => state.date.from);
    const until = useSelector((state) => state.date.until);

    useEffect(() => {
        dispatch(setIsDataLoaded(false));
        getPriceData(from, until).then(({ data, success }) => {


            if (!success) throw new Error();

            const priceData = chartDataConvertor(data.ee);

            setPriceData(priceData);

        }).catch(error => {

            console.log(error);
            return dispatch(setErrorMessage(ERROR_MESSAGE));
        })
            .finally(() => dispatch(setIsDataLoaded(true)) );
    }, [from, until, dispatch]);


    useEffect(() => {
        dispatch(setIsDataLoaded(false));
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);
        dispatch(setIsDataLoaded(true));
        if (lowPriceIntervals.length) {

            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position + 1);
            dispatch(setBestUntil(lowPriceIntervals[0].timestamp));
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
                        <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={<RenderDots />} />
                        <ReferenceArea x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />
                        <ReferenceLine y={averagePrice} label="Average" stroke="grey" strokeDasharray="3 3" />

                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;