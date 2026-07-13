//NO TOCAR NADA
import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useApp() {
    return useContext(AppContext);
}