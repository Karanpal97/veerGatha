import { Typography } from "@material-tailwind/react";
import bg from "../assets/imgs/Group_237689.png";
import Login from "../components/LoginPg/login";
import React from "react";

function LoginPg() {
    return (
        <>
            {" "}
            <div
                className="grid grid-cols-7"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "100% 100%",
                }}
            >
                <div className="col-span-3">
                    <Login />
                </div>
                <div className="hidden lg:flex flex-col col-span-4 items-center ">
                    <div className="text flex flex-1 justify-center items-center ">
                        <Typography
                            variant="h3"
                            color="white"
                            className="p-8 flex justify-center items-center text-center font-poppins"
                        >
                            EXPERIENCE WHEN SHARED BECOMES INSPIRATION
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPg;
