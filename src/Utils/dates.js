//2024-01 - 29
import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, "hours").format();
export const getDefaultUntil = () => moment().add(1, "day").format();

export const convertToInputFormat = (dateTime) => moment(dateTime).format("YYYY-MM-DDTHH:mm");

export const convertToRequestFormat = (dateTime) => moment(dateTime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix();

export const untilToMinPrice = (priceData) => {

    const curTimeStamp = currentTimeStamp();
    if (!priceData) {

        return Date.now() + 60000 * 60;
    }

    const min = priceData.reduce(function (prev, curr) {
        return prev.timestamp >= curTimeStamp && prev.price < curr.price ? prev : curr;
    });
    const minDate = moment(min.timestamp * 1000);
    const curDate = moment(curTimeStamp * 1000);

    return curTimeStamp * 1000 + minDate.diff(curDate);
};


