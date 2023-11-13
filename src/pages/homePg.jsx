import React, { useEffect, useState } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import HomeCard from "../components/StoryPg/HomeCards";
import axios from "axios";
import Cookies from "js-cookie";

const HomePg = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        // const authToken = Cookies.get("myToken");

        // const headers = {
        //     Authorization: `Bearer ${authToken}`,
        // };

        axios
            .get(
                "https://veergatha1-0.onrender.com/feed/storylist/"
                // , {
                //     headers,
                // }
            )
            .then((response) => {
                setStories(response.data.data);
                console.log(response.data.data)
            })
            .catch((error) => {
                console.error("Error:", error);
            });
            
    }, []);

    return (
        <>
            <div
                className="TopContainer bg-cover relative "
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
            <div className="mainContainer m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {stories.map((story, index) => (
                    <HomeCard key={index} {...story} />
                ))}
            </div>
        </>
    );
};

export default HomePg;
