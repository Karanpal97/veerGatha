import React, { useState, useEffect } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import { Avatar } from "@material-tailwind/react";
import { LocationInput } from "../components/createPG/locationInput";
import axios from "axios";
import { ImageInput } from "../components/createPG/imaginputicon";
import { SummaryInput } from "../components/createPG/summaryInput";
import Cookies from "js-cookie";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
const StoryCreatePg = () => {
    const [storyData, setStoryData] = useState({
        title: "",
        image: "",
        summary: "",
        detail: "",
        district: "",
        state: "",
        author: "",
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStoryData({
            ...storyData,
            [name]: value,
        });
    };

    const handleLocationSave = (locationData) => {
        setStoryData({
            ...storyData,
            state: locationData.state,
            district: locationData.district,
        });
    };

    const handleImageSave = (imageData) => {
        setStoryData({
            ...storyData,
            image: imageData,
        });
    };

    const handleSummarySave = (summaryData) => {
        setStoryData({
            ...storyData,
            summary: summaryData,
        });
    };

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const authToken = Cookies.get("myToken");
        const api = "https://veergatha1-0.onrender.com/buffer/story/create/";

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        try {
            const response = await axios.post(api, storyData, { headers });

            console.log("Post success:", response.data);
            navigate("/home");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                {" "}
                <div
                    className="TopContainer bg-cover bg-no-repeat  "
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className="absolute w-full">
                        {" "}
                        <NavbarSimple />
                    </div>
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
                        <a href="/aboutus">
                        <Button color="white" className="text-black">
                            Learn More
                        </Button>
                    </a>
                    </div>
                </div>
                <div className="mainContainer mx-auto my-[2rem] w-[90%] lg:w-[70%]  ">
                    <div>
                        <h1 className="font-extrabold text-[2rem] my-[2rem] text-black text-center">
                            Share Your Experience with the World
                        </h1>
                    </div>
                    <div className="border-4  rounded-2xl  ">
                        <div className=" flex gap-4  mx-[1.5rem] lg:mx-[3.5rem] mt-[2rem]">
                            <Avatar
                                withBorder={true}
                                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                                alt="avatar"
                            />
                            <h1 className="text-[1.2rem] font-bold flex justify-center items-center">
                                {storyData.author}
                            </h1>
                        </div>
                        <div className="border-b-4 flex px-[1.5rem] lg:px-[3rem] py-[2rem] ">
                            <h1 className="font-bold text-[1.2rem]">Title:</h1>
                            <input
                                type="text"
                                name="title"
                                value={storyData.title}
                                onChange={handleInputChange}
                                className="w-full outline-none px-[1rem]"
                            />
                        </div>
                        <div className="m-[2rem]">
                            <textarea
                                name="detail"
                                id="detail"
                                value={storyData.detail}
                                onChange={handleInputChange}
                                placeholder="say something..."
                                className="w-full min-h-[8rem] outline-none p-[2rem]"
                            ></textarea>
                        </div>
                        <div className=" m-[0.5rem] flex gap-4 p-[2rem]">
                            <LocationInput onSave={handleLocationSave} />
                            <ImageInput onSaveImage={handleImageSave} />
                            <SummaryInput onSaveSummary={handleSummarySave} />
                        </div>
                        <div className="border-t-4 flex justify-end p-[1.5rem]">
                            <Button
                                className="rounded-full"
                                onClick={handlePostSubmit}
                            >
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryCreatePg;
