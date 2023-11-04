import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { AiFillEye } from "react-icons/ai";
import React from "react";

const ProfileCard = ({
    title,
    authorName,
    date,
    views,
    description,
    imageUrl,
}) => {
    return (
        <Card className="mt-6  border">
            <CardBody className="flex flex-col lg:flex-row gap-[2rem]">
                <img
                    src={imageUrl}
                    alt="card-image"
                    className="rounded w-[296px]"
                />
                <div>
                    <Typography variant="h5" color="blue-gray" className="my-2">
                        {title}
                    </Typography>
                    <div className="flex justify-between">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-light"
                        >
                            {authorName}
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
                        {description}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0 ">
                <a
                    href=""
                    className="text-[0.8rem] font-extrabold bg-transparent text-black border-0 underline decoration-dotted"
                >
                    View More
                </a>
            </CardFooter>
        </Card>
    );
};

export default ProfileCard;
