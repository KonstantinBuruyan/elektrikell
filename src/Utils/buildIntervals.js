import { interval } from "d3-timer";
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
        const dataInterval = futureData.slice(i, interval + i + 1);

        //console.log("dataInterval", dataInterval, "interval", interval);
        if (dataInterval.length < interval) {
            //console.log("return");
            return;
        }
        
     /*   console.log("take", lodash.take(dataInterval, interval));*/

        const sumInterval = lodash.take(dataInterval, interval).reduce((acc, { price }, i) => {
            return acc + parseFloat(price);
        }, 0);

        //const sumInterval = lodash.sum(dataInterval.map(({ price }) => price));
       
        if (minimum > sumInterval) {
            minimum = sumInterval;
            result = dataInterval;
        }

    });
    //console.log("result", result);
    return result.map((r, i) => {
        return {
            ...r, index: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
        };

    });
};
