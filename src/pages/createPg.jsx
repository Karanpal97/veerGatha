import { React, useEffect, useState } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import Avatar from "@material-tailwind/react";

const StoryCreatePg = () => {
    return (
        <>
            <div
                className="TopContainer "
                style={{ backgroundImage: `url(${bg})` }}
            >
                <NavbarSimple />
                <div className="text-white h-[80vh] flex flex-col gap-2 justify-center items-center text-center">
                    <h1 className="font-extrabold text-[1.6rem]">
                        EXPERIENCE WHEN SHARED BECOMES INSPIRATION
                    </h1>
                    <h5 className="font-medium text-[1.1rem]">
                        SHARE{" "}
                        <span className="font-extrabold text-[1.3rem]">& </span>
                        INSPIRE
                    </h5>
                    <Button color="white" className="text-black">
                        Learn More
                    </Button>
                </div>
            </div>
            <div className=" mainContainer m-[2rem]  ">
                <h1 className="font-extrabold text-[2rem] text-black text-center">
                    Share Your Experience with the World
                </h1>
                <div>
                    <Avatar
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="usrProfile"
                        variant="rounded"
                    />
                </div>
            </div>
        </>
    );
};

export default StoryCreatePg;
