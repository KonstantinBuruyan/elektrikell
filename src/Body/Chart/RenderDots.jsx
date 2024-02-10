import { Dot } from 'recharts';
import { currentTimeStamp, currentTimeMinutes } from "../../Utils/";


function RenderDots(props) {
    const { cx, cy, payload, value } = props;
    const currentDay = currentTimeStamp();
    const { ...newProps } = props;

    const isSpecialDot = payload.timestamp === currentDay;
    if (!isSpecialDot) {
        return null;
    }
    const deltaX = (currentTimeMinutes() / 60) * (cx / (props.index + 2));

    newProps.cx = cx + deltaX;
    newProps.cy = cy;

    return (
        <>
            <Dot {...newProps} r={5} fill="#8884d8" strokeWidth={2} stroke="#8884d8" />
            <Dot {...newProps} r={10} fill="none" strokeWidth={2} stroke="hsl(0, 100%, 90%)" />
            <text x={newProps.cx} y={newProps.cy - 20} textAnchor="middle" fill="#666">{`${value} c/kWh`}</text>
        </>
    );
};

export default RenderDots;