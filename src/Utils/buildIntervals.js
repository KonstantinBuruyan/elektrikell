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
        
        const dataInterval = futureData.slice(i, interval + i +1);

       
        if (dataInterval.length < interval +1) {
            return;
        }

        const sumInterval = lodash.take(dataInterval, interval).reduce((acc, { price }) => {
            return acc + parseFloat(price);
        }, 0);

        if (minimum > sumInterval) {
            minimum = sumInterval;
            result = dataInterval;
        }

    });
   
    return result.map((r) => {
        return {
            ...r, index: data.findIndex(({ timestamp }) => timestamp === r.timestamp),
        };

    });
};

export const getAveragePrice = sumInterval => {
    
    return lodash.round(lodash.meanBy(sumInterval, p => parseFloat(p.price)), 2).toFixed(2);
}
