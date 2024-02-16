import { createContext, useState } from "react";

export const ElektricPriceContext = createContext(null);



function ElektricPriceProvider({ children }) {
    const [averagePrice, setAveragePrice] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);

    const value = {
        values: {
            averagePrice,
            currentPrice,
        },
        actions: {
            setAveragePrice,
            setCurrentPrice,
        },
    };

    return (
        <ElektricPriceContext.Provider value={value}>
            {children}
        </ElektricPriceContext.Provider>
    );
}

export default ElektricPriceProvider;