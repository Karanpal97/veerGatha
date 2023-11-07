import React, { useEffect, useState } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import HomeCard from "../components/StoryPg/HomeCards";
import axios from "axios";

const HomePg = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios
            .get("api-endpoint")
            .then((response) => {
                setStories(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

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
            <div className="mainContainer m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {stories.map((story, index) => (
                    <HomeCard key={index} {...story} />
                ))}
            </div>
        </>
    );
};

export default HomePg;
