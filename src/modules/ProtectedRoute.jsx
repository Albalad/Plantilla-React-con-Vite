import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../context/useApp";

function ProtectedRoute() {

    const { players } = useApp();

    if (/*condición para redirigir al inicio o mostrar la página*/players === 0) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;