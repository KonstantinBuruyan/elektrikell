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
        const dataInterval = futureData.slice(i, interval + i+1 );

        if(dataInterval.lenght < interval) return;

        const sumInterval = dataInterval.reduce((acc, {price})=> {
            return acc + parseFloat(price);
        },0);

        //const sumInterval = lodash.sum(dataInterval.map(({ price }) => price));

        if (minimum > sumInterval) {
            minimum = sumInterval;
            result = dataInterval;
        }

        
    });
    return result.map((r, i) =>{
        return{
            ...r, index: data.findIndex(({timestamp}) => timestamp ===r.timestamp),
        };
        
    }) ;
};
