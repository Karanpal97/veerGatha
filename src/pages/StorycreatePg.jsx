import { React, useEffect, useState } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import HomeCard from "../components/StoryPg/HomeCards";
import { Avatar } from "@material-tailwind/react";
import locationIcon from "../assets/location.png";
const StoryCreatePg = () => {
    return (
        <>
            <div className="flex flex-col   gap-4">
                {" "}
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
                            <span className="font-extrabold text-[1.3rem]">
                                &{" "}
                            </span>
                            INSPIRE
                        </h5>
                        <Button color="white" className="text-black">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="mainContainer mx-auto my-[2rem] w-[70%]  ">
                    <div>
                        <h1 className="font-extrabold text-[2rem] my-[2rem] text-black text-center">
                            Share Your Experience with the World
                        </h1>
                    </div>
                    <div className="border-4  rounded-2xl  ">
                        <div className=" flex gap-4  mx-[3.5rem] mt-[2rem]">
                            <Avatar
                                withBorder={true}
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="avatar"
                            />
                            <h1 className="text-[1.2rem] font-bold flex justify-center items-center">
                                UserName
                            </h1>
                        </div>
                        <div className="m-[2rem]">
                            <textarea
                                name=""
                                id=""
                                rows="10"
                                placeholder="say something..."
                                className="w-full min-h-[8rem] p-[2rem]"
                            ></textarea>
                        </div>
                        
                        <div className=" m-[0.5rem] flex gap-4 p-[2rem]">
                            <Avatar
                                className="bg-gray-400 "
                                size="sm"
                                src={locationIcon}
                                alt="avatar"
                            />
                            <Avatar
                                className="bg-gray-400 "
                                size="sm"
                                src={locationIcon}
                                alt="avatar"
                            />
                        </div>
                        <div className="border-t-4 flex justify-end p-[1.5rem]">
                            <Button className="rounded-full">Post</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryCreatePg;
