import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
    Checkbox,
} from "@material-tailwind/react";
import { FaCrown } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

const api = "https://veergatha1-0.onrender.com/";
export function Validation() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        aadhar: "",
        background: "",
        contact: "",
        user: "",
    });
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isApplicationUnderProcess, setIsApplicationUnderProcess] =
        useState(false);

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const handleOpen = () => setOpen(!open);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        if (isCheckboxChecked) {
            try {
                const response = await axios.post(
                    api + "buffer/validator/create/",
                    formData,
                    { headers }
                );
                console.log("Response:", response);
                setIsApplicationUnderProcess(true);
            } catch (error) {
                console.error("Error: ", error);
            }
        } else {
            alert("Please confirm the information is true and correct.");
        }
    };
    return (
        <>
            <Button
                onClick={handleOpen}
                className=" flex justify-center text-[0.6rem]  lg:text-[1rem] items-center font-extrabold hover:cursor-pointer  gap-1  "
                disabled={isApplicationUnderProcess}
            >
                {isApplicationUnderProcess ? (
                    "Your application is under process"
                ) : (
                    <>
                        Upgrade to validator{" "}
                        <FaCrown className="text-amber-500 text-[1rem] flex items-center" />
                    </>
                )}
            </Button>
            <Dialog open={open} size="xs" handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader className=" text-center">
                        {" "}
                        <Typography className="m-2 " variant="h4">
                            Validator Application
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <DialogBody>
                        <div className="grid gap-6">
                            <Input
                                label="Contact"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        contact: e.target.value,
                                    });
                                }}
                            />

                            <Input
                                label="aadhar"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        aadhar: e.target.value,
                                    });
                                }}
                            />
                            <Textarea
                                label="Write a brief description about yourself"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        background: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <Checkbox
                            checked={isCheckboxChecked}
                            onChange={handleCheckboxChange}
                            label={
                                <Typography
                                    color="blue-gray"
                                    className=" font-medium text-[0.7rem] text-center"
                                >
                                    I hereby confirm that the above information
                                    is{" "}
                                    <span className="font-bold">
                                        True and Correct
                                    </span>{" "}
                                    according to my knowledge
                                </Typography>
                            }
                        />
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="gradient" color="gray" type="submit">
                            Submit
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
}
