import { BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';
import { useMemo } from 'react';


function BadgePrice({ currentPrice }) {

    const badge = useMemo(() => getBadge(currentPrice), [currentPrice]);

    function getBadge(currentPrice) {
        //console.log(currentPrice);
        // average price by default. if the price is equal to or above 10 cents
        const b = { name: BADGES[1].name, id: BADGES[1].id };

        //high price if current one is equal or  above 15 cents
        if (currentPrice >= 15) {
            b.name = BADGES[2].name;
            b.id = BADGES[2].id;
        }
            //low price if current one is below 10 cents
        else if (currentPrice < 10) {
            b.name = BADGES[0].name;
            b.id = BADGES[0].id;
        }

        return b;
    }

    return (<Badge bg={badge.name}>{badge.id}</Badge>);

}
export default BadgePrice;