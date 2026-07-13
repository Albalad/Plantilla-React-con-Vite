import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {

    // ===== ESTADOS =====

    const [data, setData] = useState([]);

    // ===== FUNCIONES =====

    const hola = (name) => {
        console.log("hola mundo!")
    };

    // ===== DATOS QUE COMPARTIMOS =====

    const value = {

        data,
        hola

    };

    return (

        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>

    );

}