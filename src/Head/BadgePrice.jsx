import { BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';
import { useMemo } from 'react';


function BadgePrice({ currentPrice, averagePrice }) {

    const badge = useMemo(() => getBadge(averagePrice, currentPrice), [currentPrice, averagePrice]);

    function getBadge(avgPrice, currentPrice) {
       // console.log(avgPrice, currentPrice);
        const upperAverageThreshold = avgPrice * 1.25; //upper threshold is greater on 25 percentage from average price
        const lowAverageThreshold = avgPrice * 0.75; //low threshold is less on 25 percentage from average price

        // average price by default. Average range is within 25% up and down from average price
        const b = { name: BADGES[1].name, id: BADGES[1].id };

        //if current price is greater than upper threshold is high price
        if (currentPrice > upperAverageThreshold) {
            b.name = BADGES[2].name;
            b.id = BADGES[2].id;
        }
        //if current price is lesser than low threshold is low price
        else if (currentPrice < lowAverageThreshold) {
            b.name = BADGES[0].name;
            b.id = BADGES[0].id;
        }

        return b;
    }

    return (<Badge bg={badge.name}>{badge.id}</Badge>);

}
export default BadgePrice;