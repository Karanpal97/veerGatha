import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Textarea,
} from "@material-tailwind/react";
import summaryIcon from "../../assets/summary.png";
import { Avatar } from "@material-tailwind/react";
export const SummaryInput = ({ onSaveSummary }) => {
    const [open, setOpen] = React.useState(false);
    const [summary, setSummary] = React.useState("");

    const handleOpen = () => setOpen(!open);

    const handleConfirm = () => {
        // Call prop function to send summary to parent component
        onSaveSummary(summary);
        // Close the dialog
        setOpen(false);
    };

    return (
        <>
            <Avatar
                onClick={handleOpen}
                className="bg-gray-400 "
                size="sm"
                src={summaryIcon}
                alt="avatar"
            />
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Write a Short Summary</DialogHeader>
                <DialogBody>
                    <Textarea
                        variant="static"
                        placeholder="Summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
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
                        onClick={handleConfirm}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};



