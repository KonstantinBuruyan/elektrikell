import { useEffect, useState, useMemo } from "react";
import { getPriceData } from "../services/apiService";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, ReferenceArea, ReferenceLine } from 'recharts';
import { chartDataConvertor } from "../Utils";
import { getLowPriceInterval } from "../Utils/buildIntervals";
import lodash from "lodash";
import { getAveragePice } from "../Utils/math";
import { ERROR_MESSAGE } from "./constants";
import { RenderDots, RenderTooltip, RenderTick }  from "./Chart";



function Body({ from, until, activeHour, setErrorMessage, setBestUntill, setDataLoaded }) {

    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    const averagePrice = useMemo(() => {
        return getAveragePice(priceData);

    }, [priceData]);

    useEffect(() => {
        getPriceData(from, until).then(({ data, success }) => {

            if (!success) throw new Error();

            const priceData = chartDataConvertor(data.ee);

            setPriceData(priceData);

        }).catch(error => setErrorMessage(ERROR_MESSAGE))
            .finally(() => setDataLoaded(true));
    }, [from, until, setDataLoaded, setErrorMessage]);


    useEffect(() => {

        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);
        setDataLoaded(true);
        if (lowPriceIntervals.length) {

            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position + 1);
            setBestUntill(lowPriceIntervals[0].timestamp);
        }
    }, [priceData, activeHour, setBestUntill, setDataLoaded]);


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