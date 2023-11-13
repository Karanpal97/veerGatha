import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { AiFillEye } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const HomeCard = ({
    title,
    author,
    summary,
    posted,
    views,
    image,
    detail,
    id,
    state,
    district
}) => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState();

    const handleViewPostClick = () => {
        navigate("/storypage", {
            state: {
                title,
                author,
                summary,
                posted,
                views,
                image,
                detail,
                userdata,
                state,
                district
            },
        });
    };
    useEffect(() => {
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        axios
            .get(`https://veergatha1-0.onrender.com/auth/viewer/${author}/`, {
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
        <Card className="mt-6 mx-auto lg:w-96 border">
            <CardBody>
                <div className="flex justify-center">
                    <img src={image} alt="bg" className="rounded" />
                </div>
                <Typography variant="h5" color="blue-gray" className="m-2">
                    {title}
                </Typography>

                <div className="flex justify-between">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2 font-light"
                    >
                        {userdata}
                    </Typography>
                    <div className="flex justify-between gap-2">
                        <Typography className="mb-2 text-[0.8rem] font-light flex justify-center items-center">
                            {posted}
                        </Typography>
                        <Typography className="px-5 mb-2 font-light text-[0.8rem] flex justify-center items-center">
                            <span className="font-light flex">
                                {" "}
                                <AiFillEye />
                            </span>{" "}
                            {views}
                        </Typography>
                    </div>
                </div>
                <Typography className="text-[0.85rem] font-extralight">
                    {summary}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 " onClick={handleViewPostClick}>
                <a className="text-[0.8rem] font-extrabold bg-transparent text-black border-0 underline decoration-dotted hover:cursor-pointer">
                    View More
                </a>
            </CardFooter>
        </Card>
    );
};

export default HomeCard;
