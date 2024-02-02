import { useEffect, useState } from "react";
import { getPriceData } from "../services/apiService";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, Dot, ReferenceLine, ReferenceArea } from 'recharts';
import { chartDataConvertor } from "../Utils";
import { currentTimeStamp } from "../Utils/dates";
import { getLowPriceInterval } from "../Utils/buildIntervals";
import lodash from "lodash";


function Body({ from, until, activeHour }) {
    const renderDot = (line) => {
        const { cx, cy, payload: { timestamp }, } = line;
        const cxN = cx + 20;
        return timestamp === currentTimeStamp() ? (
            <Dot {...line}>
                <div>

                </div>
            </Dot>
        ) : null;
    };
    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    useEffect(() => {
        getPriceData(from, until).then(({ data }) => {
            const priceData = chartDataConvertor(data.ee);
            setPriceData(priceData);
        });
    }, [from, until]);

    useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);
        if (lowPriceIntervals.length) {
            setX1(lowPriceIntervals[0].index);
            setX2(lodash.last(lowPriceIntervals).index);
            console.log(lowPriceIntervals)
        
        }
    }, [priceData, activeHour]);
    return (
        <Row>
            <Col>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}  >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" interval={1} />
                        <YAxis />
                        <Tooltip />
                        <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={renderDot} />
                        < ReferenceArea x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />

                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;