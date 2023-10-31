import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPg from "./pages/signUpPg";
import LoginPg from "./pages/loginPg";
import HomePg from "./pages/homePg";
import ProfilePgViewer from "./pages/profilePgviewer";
import App from "./App";
import ProfilePgValidator from "./pages/profilePgValidator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePg />,
            },
            {
                path: "/signup",
                element: <SignupPg />,
            },
            {
                path: "/login",
                element: <LoginPg />,
            },
            {
                path: "/home",
                element: <HomePg />,
            },
            {
                path: "/profile/viewer",
                element: <ProfilePgViewer />,
            },
            {
                path: "/profile/validator",
                element: <ProfilePgValidator />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);

