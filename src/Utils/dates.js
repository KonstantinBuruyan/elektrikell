//2024-01 - 29
import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, "hours").format();
export const getDefaultUntil = () => moment().add(1, "day").format();

export const convertToInputFormat = (dateTime) => moment(dateTime).format("YYYY-MM-DDTHH:mm");

export const convertToRequestFormat = (dateTime) => moment(dateTime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix();

export const untilToMinPrice = (priceData) => {

    const curTimeStamp = currentTimeStamp() ;


    //console.log("priceData", priceData);
  
    const curDate = moment(curTimeStamp *1000 );
  
    if (!priceData || priceData.length ===0) {
        console.log("curDate", curDate.valueOf());
        return curDate.valueOf();
    }

    const min = priceData.reduce(function (prev, curr) {
        return curr.timestamp >= curTimeStamp && prev.price > curr.price ? curr : prev;
    } );
    const minDate = moment(min.timestamp *1000);
   

    const until = curDate.valueOf() + (minDate.diff(curDate).valueOf());
  
    if (!until) {
        //console.log("until curDate", curDate.valueOf());
        return curDate.valueOf();
    }

    //console.log("until", until.valueOf());
    return until.valueOf();
};


