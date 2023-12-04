import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPg from "./pages/signUpPg";
import LoginPg from "./pages/loginPg";
import HomePg from "./pages/homePg";
import ProfilePgViewer from "./pages/profilePgviewer";
import App from "./App.jsx";
import ProfilePgValidator from "./pages/profilePgValidator";
import CreatePg from "./pages/createPg";
import StoryCreatePg from "./pages/StorycreatePg";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux'
import store from './reactRedux/Store'

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
               
                element:
                    <SignupPg />
                   ,
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
            {
                path: "/create",
                element: <StoryCreatePg />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </React.StrictMode>,
);
