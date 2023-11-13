import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import locationIcon from "../../assets/location.png";
import { Avatar } from "@material-tailwind/react";

export function LocationInput({ onSave }) {
    const [open, setOpen] = useState(false);
    const [locationData, setLocationData] = useState({
        state: "",
        district: "",
    });

    const handleOpen = () => setOpen(!open);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocationData({
            ...locationData,
            [name]: value,
        });
    };

    const handleSave = () => {
      
        onSave(locationData);

        
        handleOpen();
    };

    return (
        <>
            <Avatar
                onClick={handleOpen}
                className="bg-gray-400 "
                size="sm"
                src={locationIcon}
                alt="avatar"
            />
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Enter your district and state. </DialogHeader>
                <DialogBody className="flex flex-col gap-4">
                    <Input
                        label="State"
                        name="state"
                        value={locationData.state}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="District"
                        name="district"
                        value={locationData.district}
                        onChange={handleInputChange}
                    />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleSave}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
