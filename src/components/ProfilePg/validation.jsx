import React from "react";
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

export function Validation() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                onClick={handleOpen}
                className=" flex justify-center text-[0.6rem] items-center font-bold  gap-1 "
            >
                Upgrade{" "}
                <FaCrown className="text-amber-500 text-[1rem] flex items-center" />
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
                <DialogBody>
                    <div className="grid gap-6">
                        <Input label="Contact" />
                        <Input label="Aadhar Number" />
                        <Textarea label="Write a brief description about yourself" />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                color="blue-gray"
                                className=" font-medium text-[0.7rem] text-center"
                            >
                                I hereby confirm that the above information is{" "}
                                <span className="font-bold">
                                    True and Correct
                                </span>{" "}
                                according to my knowledge
                            </Typography>
                        }
                    />
                </DialogBody>
                <DialogFooter className="space-x-2">
                    
                    <Button
                        variant="gradient"
                        color="gray"
                        onClick={handleOpen}
                    >
                        Submit
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
