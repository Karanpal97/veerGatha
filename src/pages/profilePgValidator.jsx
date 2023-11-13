import React, { useEffect, useState } from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import "../assets/imgs/homepgBg.png";
import ProfileCard from "../components/ProfilePg/ProfileCards";
import axios from "axios";
import Cookies from "js-cookie";
import ValidatorCards from "../components/ProfilePg/validatorCards";
import PendingCards from "../components/ProfilePg/PendingCards";
const ProfilePgViewer = () => {
    const [showPosts, setShowPosts] = useState(true);
    const [showPending, setShowPending] = useState(false);
    const [showApproved, setShowApproved] = useState(false);
    const [showvalidatorRequest, setShowValidatorRequest] = useState(false);

    const [validatorData, setValidatorData] = useState([
        { name: "", imgUrl: "", joiningDate: "", description: "" },
    ]);
    const [posts, setPosts] = useState([]);
    const [pending, setPending] = useState([]);
    const [approved, setApproved] = useState([]);
    const [validatorRequest, setValidatorRequest] = useState([]);

    const handleShowPosts = () => {
        setShowPosts(true);
        setShowPending(false);
        setShowApproved(false);
        setShowValidatorRequest(false);
    };

    const handleShowPending = () => {
        setShowPosts(false);
        setShowPending(true);
        setShowApproved(false);
        setShowValidatorRequest(false);

        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        axios
            .get("https://veergatha1-0.onrender.com/buffer/story/list/", {
                headers,
            })
            .then((response) => {
                setPending(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching pending stories:", error);
            });
    };
    const handleShowApproved = () => {
        setShowPosts(false);
        setShowPending(false);
        setShowApproved(true);
        setShowValidatorRequest(false);

        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        axios
            .get("https://veergatha1-0.onrender.com/feed/story/validator/", {
                headers,
            })
            .then((response) => {
                setApproved(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching pending stories:", error);
            });
    };

    const handleShowValidatrorRequest = () => {
        setShowPosts(false);
        setShowPending(false);
        setShowApproved(false);
        setShowValidatorRequest(true);

        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        axios
            .get("https://veergatha1-0.onrender.com/buffer/validator/list/", {
                headers,
            })
            .then((response) => {
                setValidatorRequest(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching pending stories:", error);
            });
    };

    const handleApproveValidator = (index) => {
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        const validatorId = validatorRequest[index].id;

        axios
            .patch(
                `https://veergatha1-0.onrender.com/buffer/validator/edit/${validatorId}/`,
                {
                    authorised: true,
                },
                { headers }
            )
            .then((response) => {
                const updatedValidators = [...validatorRequest];
                updatedValidators.splice(index, 1);
                setValidatorRequest(updatedValidators);
            })
            .catch((error) => {
                console.error("Error approving validator:", error);
            });
    };

    const handleRejetValidator = (index) => {
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        const validatorId = validatorRequest[index].id;

        axios
            .patch(
                `https://veergatha1-0.onrender.com/buffer/validator/edit/${validatorId}/`,
                {
                    authorised: false,
                },
                { headers }
            )
            .then((response) => {
                const updatedValidators = [...validatorRequest];
                updatedValidators.splice(index, 1);
                setValidatorRequest(updatedValidators);
            })
            .catch((error) => {
                console.error("Error Rejecting validator:", error);
            });
    };

    return (
        <>
            <div id="TopContainer " className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
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
                                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                                alt="profilePic"
                                className="w-[12rem] border-2 drop-shadow-lg "
                            />
                        </div>

                        <div className="m-[4rem]">
                            <div className="font-bold text-[1.2rem] text-center lg:text-right">
                                {validatorData.name}
                            </div>
                            <div className="text-center lg:text-right">
                                {validatorData.type}
                            </div>
                            <div className="text-center lg:text-right">
                                {validatorData.joiningDate}
                            </div>
                            <div className="text-center lg:text-right my-[2rem]">
                                {validatorData.description}
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
                            <a
                                href="#approved"
                                onClick={handleShowApproved}
                                className={`text-[1.2rem] font-bold hover:cursor-pointer ${
                                    showApproved
                                        ? "text-blue-600"
                                        : "text-black"
                                }`}
                            >
                                Approved
                            </a>
                            <a
                                href="#validatorRequets"
                                onClick={handleShowValidatrorRequest}
                                className={`text-[1.2rem] font-bold hover:cursor-pointer ${
                                    showvalidatorRequest
                                        ? "text-blue-600"
                                        : "text-black"
                                }`}
                            >
                                Validtor Request
                            </a>
                        </div>
                    </div>
                    <div
                        id="posts"
                        className={`m-[4rem] ${showPosts ? "" : "hidden"}`}
                    >
                        {posts.map((story, index) => (
                            <ProfileCard key={index} {...story} />
                        ))}
                    </div>
                    <div
                        id="pending"
                        className={`m-[4rem] ${showPending ? "" : "hidden"}`}
                    >
                        {pending.map((pending, index) => (
                            <PendingCards
                                key={index}
                                {...pending}
                                isPending={true}
                            />
                        ))}
                    </div>
                    <div
                        id="approved"
                        className={`m-[4rem] ${showApproved ? "" : "hidden"}`}
                    >
                        {approved.map((approved, index) => (
                            <ProfileCard
                                key={index}
                                {...approved}
                                isApproved={true}
                            />
                        ))}
                    </div>
                    <div
                        id="validatorRequets"
                        className={`m-[4rem] ${
                            showvalidatorRequest ? "" : "hidden"
                        }`}
                    >
                        {validatorRequest.map((approved, index) => (
                            <ValidatorCards
                                key={index}
                                index={index}
                                onApprove={handleApproveValidator}
                                onReject={handleRejetValidator}
                                {...approved}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePgViewer;
