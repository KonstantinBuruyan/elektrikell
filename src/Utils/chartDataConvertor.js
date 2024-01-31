import moment  from "moment";
export default function chartDataConvertor (pricedata ) {
    return pricedata.map(data=> ({...data, hour: moment.unix(data.timestamp).format("HH")}));
};