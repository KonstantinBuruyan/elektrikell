//2024-01 - 29
import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, "hours").minutes(0).seconds(0).format();
export const getDefaultUntil = () => moment().add(2, "day").hours(0).minutes(0).seconds(0).format();

export const convertToInputFormat = (dateTime) => moment(dateTime).format("YYYY-MM-DDTHH:mm");

export const convertToRequestFormat = (dateTime) => moment(dateTime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix();

export const addHourToCurrentTSML=()=> +moment().add(1, "hour");