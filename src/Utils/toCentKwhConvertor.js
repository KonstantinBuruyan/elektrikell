export default function toCentKwhConvertor(currentPrice) {
    // get from �/MWh to cent/Kwh
    return (currentPrice / 10).toFixed(2);
};