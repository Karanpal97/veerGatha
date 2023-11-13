import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPg from "./pages/signUpPg";
import LoginPg from "./pages/loginPg";
import HomePg from "./pages/homePg";
import ProfilePgViewer from "./pages/profilePgviewer";
import StoryPg from "./components/StoryPg/storyPg";
import App from "./App.jsx";
import ProfilePgValidator from "./pages/profilePgValidator";
import StoryCreatePg from "./pages/StorycreatePg";
import { ThemeProvider } from "@material-tailwind/react";
import AboutusPg from "./pages/aboutUS.jsx";
import PrivateRoute from "./components/privateRoutes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<HomePg />} />
                            <Route path="signup" element={<SignupPg />} />
                            <Route path="login" element={<LoginPg />} />
                            <Route path="home" element={<HomePg />} />
                            <Route
                                path="profile/viewer"
                                element={
                                    <PrivateRoute>
                                        <ProfilePgViewer />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="profile/validator"
                                element={
                                    <PrivateRoute>
                                        <ProfilePgValidator />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="create"
                                element={
                                    <PrivateRoute>
                                        <StoryCreatePg />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="storypage"
                                element={
                                    <PrivateRoute>
                                        <StoryPg />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="aboutus" element={<AboutusPg />} />
                        </Route>
                    </Routes>
                </Router>
        </ThemeProvider>
    </React.StrictMode>
);