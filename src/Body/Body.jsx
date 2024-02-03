import { useEffect, useState } from "react";
import { getPriceData } from "../services/apiService";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, Dot, ReferenceArea } from 'recharts';
import { chartDataConvertor } from "../Utils";
import { currentTimeStamp } from "../Utils/dates";
import { getLowPriceInterval } from "../Utils/buildIntervals";
import lodash from "lodash";


const priceData = {
	"success": true,
	"data": {
		"ee": [
			{
				"timestamp": 1706943600,
				"price": 57.99
			},
			{
				"timestamp": 1706947200,
				"price": 53.66
			},
			{
				"timestamp": 1706950800,
				"price": 44.42
			},
			{
				"timestamp": 1706954400,
				"price": 37.95
			},
			{
				"timestamp": 1706958000,
				"price": 36.17
			},
			{
				"timestamp": 1706961600,
				"price": 35.68
			},
			{
				"timestamp": 1706965200,
				"price": 42.44
			},
			{
				"timestamp": 1706968800,
				"price": 50.09
			},
			{
				"timestamp": 1706972400,
				"price": 62.44
			},
			{
				"timestamp": 1706976000,
				"price": 72.24
			},
			{
				"timestamp": 1706979600,
				"price": 76.96
			},
			{
				"timestamp": 1706983200,
				"price": 48.36
			},
			{
				"timestamp": 1706986800,
				"price": 71.11
			},
			{
				"timestamp": 1706990400,
				"price": 19.98
			},
			{
				"timestamp": 1706994000,
				"price": 12.09
			},
			{
				"timestamp": 1706997600,
				"price": 12.08
			},
			{
				"timestamp": 1707001200,
				"price": 20.07
			},
			{
				"timestamp": 1707004800,
				"price": 17.09
			},
			{
				"timestamp": 1707008400,
				"price": 16.2
			},
			{
				"timestamp": 1707012000,
				"price": 11.68
			},
			{
				"timestamp": 1707015600,
				"price": 12.91
			},
			{
				"timestamp": 1707019200,
				"price": 17.45
			},
			{
				"timestamp": 1707022800,
				"price": 13.93
			},
			{
				"timestamp": 1707026400,
				"price": 18.22
			},
			{
				"timestamp": 1707030000,
				"price": 24.93
			},
			{
				"timestamp": 1707033600,
				"price": 24.51
			},
			{
				"timestamp": 1707037200,
				"price": 20.09
			},
			{
				"timestamp": 1707040800,
				"price": 19.2
			},
			{
				"timestamp": 1707044400,
				"price": 16.84
			},
			{
				"timestamp": 1707048000,
				"price": 9.62
			},
			{
				"timestamp": 1707051600,
				"price": 22.84
			},
			{
				"timestamp": 1707055200,
				"price": 49.06
			},
			{
				"timestamp": 1707058800,
				"price": 59.79
			},
			{
				"timestamp": 1707062400,
				"price": 64.4
			}
		]

	}
}
function Body({ from, until, activeHour }) {

    const renderDot = (line) => {
        const { payload: { timestamp }, } = line;
        if (timestamp === currentTimeStamp()) {
            
            line.cx += 18;
            line.fill = "#8884d8";
            line.stroke = "#8884d8";
            line.r = 5;
            line.strokeWidth = 2;
           
            const line2 = {...line};

            line2.fill = "none";
            line2.stroke = "hsl(0, 100%, 90%)";
            line2.r = 10;
            line2.strokeWidth = 2;
            line2.key = null;
           
            return (
                <> 
                    <Dot  {...line} />
                    <Dot  {...line2} />
                   
                </>
             )
        }
        else {
            return null;
        }
        //return timestamp === currentTimeStamp() ? (
        //    <>
        //        <Dot key="1" {...line}  />
              
        //    </>
        //) : null;
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
            console.log("x1", lowPriceIntervals[0].index, "x2", lodash.last(lowPriceIntervals).index);

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
                        <ReferenceArea x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />

                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;