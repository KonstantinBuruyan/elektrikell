import moment from "moment";

import lodash from "lodash";

export const removePast = (data) => {
    return data.filter(({ timestamp }) => {
        return moment.unix(timestamp).isAfter(moment());
    });
};

export const getLowPriceInterval = (data, interval) => {
    let minimum = Infinity;
    let result = [];
    const futureData = removePast(data);

    futureData.forEach((_, i) => {
        console.log(interval + i +1);
        const dataInterval = futureData.slice(i, interval + i +1);

       
        if (dataInterval.length < interval) {
            //console.log("return");
            return;
        }
        console.log("dataInterval", dataInterval, "interval", interval);
     /*   console.log("take", lodash.take(dataInterval, interval));*/

        const sumInterval = lodash.take(dataInterval, interval).reduce((acc, { price }) => {
            return acc + parseFloat(price);
        }, 0);

        //const sumInterval = lodash.sum(dataInterval.map(({ price }) => price));
        console.log("sumInterval", sumInterval);
        if (minimum > sumInterval) {
            minimum = sumInterval;
            result = dataInterval;
        }

    });
    console.log("result", result);
    return result.map((r) => {
        return {
            ...r, index: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
        };

    });
};
