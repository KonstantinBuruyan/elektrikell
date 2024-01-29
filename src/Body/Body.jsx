import {useEffect, useState} from "react";
import { getPriceData } from "../services/apiService";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer  } from 'recharts';
import { chartDataConvertor } from "../Utils";

function Body() {
    const [priceData, setPriceData ] = useState(null);
    useEffect(()=> { getPriceData().then(({data})=> setPriceData(chartDataConvertor( data.ee)))},[]);
    return (
        <Row>
            <Col>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={priceData}  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Line type="stepAfter" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;