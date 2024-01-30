export default function toCentKwhConvertor(currentPrice) {
    // get from ˆ/MWh to cent/Kwh
    return (currentPrice / 10).toFixed(2);
};