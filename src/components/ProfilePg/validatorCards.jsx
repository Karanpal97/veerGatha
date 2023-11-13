import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { AiFillEye } from "react-icons/ai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { FeedBackBttn } from "./feedback";

const ValidatorCards = ({
    title,
    author,
    date,
    views,
    summary,
    image,
    detail,
    id,
    isPending,
    isApproved,
    index,
    aadhar,
    background,
    contact,
    onReject,
    onApprove,
}) => {
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();

    const handleViewPostClick = () => {
        const authToken = Cookies.get("myToken");
        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        navigate(
            "/storypage",
            { state: { title, author, date, image, detail } },
            { headers }
        );
    };

    const handleApproveClick = () => {
        onApprove(index);
    };
    const handleRejectionClick = () => {
        onReject(index);
    };

    return (
        <Card className="mt-6 border">
            <CardBody className="flex flex-col lg:flex-row gap-[2rem]">
                {/* <img src={image} alt="bg" className="rounded w-[296px]" /> */}
                {/* <div>
                    <Button>Approve</Button>
                    <Button>Cancel</Button>
                </div> */}
                <div className="flex gap-[2rem]">
                    <div className="">
                    <Typography
                            variant="h5"
                            color="blue-gray"
                            className="my-2"
                        >
                            Name :
                        </Typography>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="my-2"
                        >
                            Contact :{contact}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-light"
                        >
                            Aadhar: {aadhar}
                        </Typography>
                    </div>

                    <div>
                        <span className="text-[1rem] text-black font-bold">
                            Background:{" "}
                        </span>
                        <Typography className="text-[0.85rem] font-extralight">
                            {background}
                        </Typography>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between items-center">
                {/* <a
                    href=""
                    className="text-[0.8rem] font-extrabold bg-transparent text-black border-0 underline decoration-dotted"
                >
                    View More
                </a> */}
                <div className="flex items-center gap-4">
                    {/* <Typography
                        className={`text-[0.8rem] font-bold ${
                            verified ? "text-green-500" : "text-red-500"
                        }`}
                        onClick={handleApproveClick}
                    >
                        {isPending
                            ? "Approve"
                            : verified
                            ? "View Post"
                            : "View post"}
                    </Typography> */}
                    <Button size="sm" color="blue" onClick={handleApproveClick}>
                        Approve
                    </Button>
                    <Button
                        size="sm"
                        color="red"
                        onClick={handleRejectionClick}
                    >
                        Reject
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ValidatorCards;
