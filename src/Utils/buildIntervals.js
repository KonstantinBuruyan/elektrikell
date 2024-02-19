
import { currentTimeStamp } from "./dates";
import moment from "moment";

export const removePast = (data) => {
    return data.filter(({ timestamp }) => {
        return timestamp >= currentTimeStamp();
    });
};

export const getLowPriceInterval = (data, interval) => {

    if (!data || data.length === 0) {
        return null;
    }
    let minimum = Infinity;
    let result = [];
    const futureData = removePast(data);

    futureData.forEach((_, i) => {

        const dataInterval = futureData.slice(i, interval + i);


        if (dataInterval.length < interval) {
            return;
        }

        const sumInterval = dataInterval.reduce((acc, { price }) => {
            return acc + parseFloat(price);
        }, 0);

        if (minimum > sumInterval) {
            minimum = sumInterval;
            result = dataInterval;
        }

    });

    const indexX1 = data.indexOf(result[0]);

    let indexX2 = data.indexOf(result[result.length - 1]) + 1;

    indexX2 = indexX2 < data.length ? indexX2 : data.length - 1;

    const x1 = data[indexX1].timestamp;
    const x2 = indexX1 < indexX2 ? data[indexX2].timestamp : x1;
    const bestTime = `from ${data[indexX1].hour}:00 to ${data[indexX2].hour}:00`;
    const averagePrice = (minimum / interval).toFixed(2);
    const currPrice = parseFloat(futureData[0].price);
    const isCheap = currPrice > averagePrice;
    const isNow = currentTimeStamp() >= x1 && currentTimeStamp() < x2;
    const deltaPercent = Math.abs(((currPrice - averagePrice) / (currPrice / 100)).toFixed(0));

    const countDownMS = +moment.unix(x1);


    //console.log("x1", x1);
    //console.log("x2", x2);
    //console.log("currPrice: " + currPrice);
    //console.log("averagePrice: " + averagePrice);
    //console.log("deltaPercent: " + deltaPercent);
    //console.log("isCheap: " + isCheap);
    //console.log("bestTime", bestTime);


    //return result.map((r) => {
    return {
        //...r, position: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
        x1: x1,
        x2: x2,
        averagePrice: averagePrice,
        bestTime: bestTime,
        currPrice: currPrice,
        isCheap: isCheap,
        isNow: isNow,
        deltaPercent: deltaPercent,
        countDownMS: countDownMS,
    };
    //});
};
