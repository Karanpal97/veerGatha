import React, { useState, useEffect } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import { Validation } from "../components/ProfilePg/validation";
import "../assets/imgs/homepgBg.png";
import ProfileCard from "../components/ProfilePg/ProfileCards";
import axios from "axios";
import Cookies from "js-cookie";
const ProfilePgViewer = () => {
    const [showPosts, setShowPosts] = useState(true);
    const [showPending, setShowPending] = useState(false);
    const [userdata, setUserdata] = useState();

    const [viewerData, setViewerData] = useState([
        { name: "", imgUrl: "", joiningDate: "", description: "" },
    ]);
    const [posts, setPosts] = useState([]);
    const [pending, setPending] = useState([]);

    const handleShowPosts = () => {
        setShowPosts(true);
        setShowPending(false);
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        axios
            .get("https://veergatha1-0.onrender.com/feed/story/viewer/", {
                headers,
            })
            .then((response) => {
                setPosts(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching pending stories:", error);
            });
    };

    const handleShowPending = () => {
        setShowPosts(false);
        setShowPending(true);
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        axios
            .get(
                "https://veergatha1-0.onrender.com/buffer/story/list/viewer/",
                { headers }
            )
            .then((response) => {
                setPending(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching pending stories:", error);
            });
    };

    useEffect(() => {
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        axios
            .get(`https://veergatha1-0.onrender.com/auth/viewer/`, {
                headers,
            })
            .then((response) => {
                setUserdata(response.data.data.name);
                console.log("dataaaa:" + response.data.data.name);
                // console.log(response.data.name);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <>
            <div
                id="TopContainer "
                className="bg-cover  "
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="absolute w-full">
                    {" "}
                    <NavbarSimple />
                </div>
                <div className="text-white w-screen h-[69.5vh] flex flex-col gap-2 justify-center items-center text-center">
                    <h1 className="font-extrabold text-[1.6rem]">
                        EXPERIENCE WHEN SHARED BECOMES INSPIRATION
                    </h1>
                    <h5 className="font-medium text-[1.1rem]">
                        SHARE{" "}
                        <span className="font-extrabold text-[1.3rem]">& </span>
                        INSPIRE
                    </h5>
                    <a href="/aboutus">
                        <Button color="white" className="text-black">
                            Learn More
                        </Button>
                    </a>
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
                                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
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
                                href="#posts"
                                onClick={handleShowPosts}
                                className={`text-[1.2rem] font-bold hover:cursor-pointer ${
                                    showPosts ? "text-blue-600" : "text-black"
                                }`}
                            >
                                Posts
                            </a>
                            <a
                                href="#pending"
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
                            <ProfileCard
                                key={index}
                                {...stories}
                                isApproved={true}
                            />
                        ))}
                    </div>
                    <div
                        id="pending"
                        className={`m-[4rem] ${showPending ? "" : "hidden"}`}
                    >
                        {pending.map((stories, index) => (
                            <ProfileCard
                                key={index}
                                {...stories}
                                isPending={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePgViewer;
