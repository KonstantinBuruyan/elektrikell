import lodash from "lodash";
import { VAT, COUNTRYCODES } from "../constants";
export const mwToKw = price =>+ lodash.round(addTax(parseFloat(price),"ee") / 10, 2).toFixed(2);
export const addTax = (amount, countryCode) => +lodash.round(amount * (VAT[COUNTRYCODES[countryCode]] / 100 + 1), 2).toFixed(2);