export const LOW = "low";
export const HIGH = "High";
export const SUCCESS = "success"

export const BADGES = [
    {
        name: "success",
        id: LOW,
    },
    {
        name: "danger",
        id: HIGH,
    }
];

export const PRICE_BUTTONS = [
    {
        name: "Low Price",
        id: LOW
    },
    {
        name: "High Price",
        id: HIGH
    },
];

//2024-01 - 29

const today = new Date();
const year = today.getFullYear();

let month = today.getMonth() +1 ;

if (month < 10) {
    month = `0${month}`;
}

let date = today.getDate();
let tommorow = date + 1;

if (date < 10) {
    date = `0${date}`;
}

if (tommorow < 10) {
    tommorow = `0${tommorow}`;
}

const fromDate = `${year}-${month}-${date}`;

const untilDate = `${year}-${month}-${tommorow}`;

export const DATES = [fromDate, untilDate];


export const DEFAULT_ACTIVE_BUTTON = LOW;