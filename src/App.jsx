import { Outlet } from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <div className="poppins">
                <Outlet />
            </div>{" "}
        </>
    );
}

export default App;
