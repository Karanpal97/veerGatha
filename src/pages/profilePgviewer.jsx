import React, { useState, useEffect } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import { Validation } from "../components/ProfilePg/validation";
import "../assets/imgs/homepgBg.png";
import { Posts } from "../components/ProfilePg/post";
import ProfileCard from "../components/ProfilePg/ProfileCards";
import axios from "axios";
const ProfilePgViewer = () => {
    const [showPosts, setShowPosts] = useState(true);
    const [showPending, setShowPending] = useState(false);

    const [viewerData, setViewerData] = useState([
        { name: "", imgUrl: "", joiningDate: "", description: "" },
    ]);
    const [posts, setPosts] = useState([]);
    const [pending, setPending] = useState([]);

    const handleShowPosts = () => {
        setShowPosts(true);
        setShowPending(false);
    };

    const handleShowPending = () => {
        setShowPosts(false);
        setShowPending(true);
    };

    useEffect(() => {
        axios
            .get("api")
            .then((response) => {
                const data = response.data;
                setViewerData({
                    name: data.name,
                    imgUrl: data.imgUrl,
                    joiningDate: data.joiningDate,
                    description: data.description,
                    type: data.type,
                });
            })
            .catch((error) => console.error("Error:", error));
        axios
            .get("api")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        axios
            .get("api")
            .then((response) => {
                setPending(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    return (
        <>
            <div id="TopContainer " style={{ backgroundImage: `url(${bg})` }}>
                <NavbarSimple />
                <div className="text-white w-screen h-[69.5vh] flex flex-col gap-2 justify-center items-center text-center">
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
            <div id="bottomContainer" className="grid  lg:grid-cols-4 ">
                <div
                    id="panel "
                    className="relative  border-r-2 border-gray-300 "
                >
                    <div
                        id="profileImg"
                        className="bg-white  my-[3rem] lg:absolute lg:top-[-5rem] lg:right-0  p-[0.5rem]"
                    >
                        <div className="flex justify-center">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="profilePic"
                                className="w-[12rem] border-2 drop-shadow-lg "
                            />
                        </div>

                        <div className="m-[4rem]">
                            <div className="font-bold text-[1.2rem] text-center lg:text-right">
                                {viewerData.name}
                            </div>
                            <div className="text-center lg:text-right">
                                {viewerData.type}
                            </div>
                            <div className="text-center lg:text-right">
                                {viewerData.date}
                            </div>
                            <div className="text-center lg:text-right my-[2rem]">
                                {viewerData.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mainContainer" className="lg:col-span-3 ">
                    <div
                        id="panel"
                        className="flex justify-around border-b-2 border-gray-300  py-[1rem]"
                    >
                        <div className="flex gap-[3rem] items-center">
                            <a
                                onClick={handleShowPosts}
                                className={`text-[1.2rem] font-bold hover:cursor-pointer ${
                                    showPosts ? "text-blue-600" : "text-black"
                                }`}
                            >
                                Posts
                            </a>
                            <a
                                onClick={handleShowPending}
                                className={`text-[1.2rem] font-bold hover:cursor-pointer ${
                                    showPending ? "text-blue-600" : "text-black"
                                }`}
                            >
                                Pending
                            </a>
                        </div>
                        <div className="">
                            <Validation />
                        </div>
                    </div>
                    <div
                        id="posts"
                        className={`m-[4rem] ${showPosts ? "" : "hidden"}`}
                    >
                        {posts.map((stories, index) => (
                            <ProfileCard key={index} {...stories} />
                        ))}
                    </div>
                    <div
                        id="pending"
                        className={`m-[4rem] ${showPending ? "" : "hidden"}`}
                    >
                        {pending.map((stories, index) => (
                            <ProfileCard key={index} {...stories} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePgViewer;
