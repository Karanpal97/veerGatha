
import React from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? <>{children}</> : null;
};

export default PrivateRoute;
