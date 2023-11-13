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

const PendingCards = ({
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

    const handlePendingClick = () => {
        // Check if the story is from the pending page
        if (isPending) {
            const authToken = Cookies.get("myToken");

            const headers = {
                Authorization: `Bearer ${authToken}`,
            };

            axios
                .patch(
                    `https://veergatha1-0.onrender.com/buffer/story/edit/${id}/`,
                    {
                        verified: true,
                    },
                    { headers }
                )
                .then((response) => {
                    setVerified(true);
                })
                .catch((error) => {
                    console.error("Error approving post:", error);
                });
        }
    };

    // const handleApproveClick = () => {
    //     onApprove(index);
    // };
    // const handleRejectionClick = () => {
    //     onReject(index);
    // };

    return (
        <Card className="mt-6 border">
            <CardBody className="flex flex-col lg:flex-row gap-[2rem]">
                <img src={image} alt="bg" className="rounded w-[296px]" />
                <div>
                    <Typography variant="h5" color="blue-gray" className="my-2">
                        {contact}
                    </Typography>
                    <div className="flex justify-between">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-light"
                        >
                            {aadhar}
                        </Typography>
                        <div className="flex justify-between gap-2">
                            <Typography className="mb-2 text-[0.8rem] font-light flex justify-center items-center">
                                {date}
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
                        {background}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between items-center">
                <a
                    href=""
                    className="text-[0.8rem] font-extrabold bg-transparent text-black border-0 underline decoration-dotted"
                >
                    View More
                </a>
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
                    <Button size="sm" color="blue" onClick={handlePendingClick}>
                        Approve
                    </Button>
                    {/* <Button
                        size="sm"
                        color="red"
                        onClick={handleRejectionClick}
                    >
                        Reject
                    </Button> */}
                    <FeedBackBttn id={id} />
                </div>
            </CardFooter>
        </Card>
    );
};

export default PendingCards;
