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

const HomeCard = ({
    title,
    authorName,
    date,
    views,
    description,
    imageUrl,
}) => {
    return (
        <Card className="mt-6 w-96 border">
            <CardBody>
                <img src={imageUrl} alt="card-image" className="rounded" />
                <Typography variant="h5" color="blue-gray" className="m-2">
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

export default HomeCard;
