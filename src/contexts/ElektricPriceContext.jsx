import { createContext, useState } from "react";

export const ElektricPriceContext = createContext(null);



function ElektricPriceProvider({ children }) {
    const [averagePrice, setAveragePrice] = useState(0);

    const value = {
        values: {
            averagePrice,
        },
        actions: {
            setAveragePrice,
        },
    };

    return (
        <ElektricPriceContext.Provider value={value}>
            {children}
        </ElektricPriceContext.Provider>
    );
}

export default ElektricPriceProvider;