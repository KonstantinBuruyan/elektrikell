import {useEffect, useState} from "react";
import { getPriceData } from "../services/apiService";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer, Dot  } from 'recharts';
import { chartDataConvertor  } from "../Utils";
import {  currentTimeStamp  } from "../Utils/dates";


function Body({from, until}) {
   const renderDot = (line)=>{
    const {cx,
         cy,
         payload: {timestamp},
        } = line;
const cxN=cx +20;
   return timestamp === currentTimeStamp() ? (
    <Dot {...line}>
        <div>

        </div>
    </Dot>
   ) :null;
};
    const [priceData, setPriceData ] = useState(null);

    useEffect(()=> { getPriceData(from, until).then(({data})=> setPriceData(chartDataConvertor( data.ee)))},[from, until]);
    return (
        <Row>
            <Col>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={priceData}  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" interval={1}/>
                    <YAxis />
                    <Tooltip />
                    <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={renderDot} />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;