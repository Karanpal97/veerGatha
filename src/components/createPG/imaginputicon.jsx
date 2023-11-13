import React, { useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import imgIcon from "../../assets/img.png";
import { Avatar } from "@material-tailwind/react";

export function ImageInput({ onSaveImage }) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImage(file);
        }
    };

    const handleOpen = () => setOpen(!open);

    const handleUpload = async () => {
        try {
            if (!selectedImage) {
                console.error("No image selected.");
                return;
            }

            setUploading(true);

            const formData = new FormData();
            formData.append("file", selectedImage);
            formData.append("upload_preset", "karanUpload"); // Replace with your Cloudinary upload preset

            // Upload image to Cloudinary
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dha8atrgz/image/upload", // Replace with your Cloudinary cloud name
                formData
            );

            // Get the URL of the uploaded image from the Cloudinary response
            const imageUrl = response.data.secure_url;

            // Save the image URL
            onSaveImage(imageUrl);

            // Close the dialog
            handleOpen();
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <Avatar
                onClick={handleOpen}
                className="bg-gray-400 "
                size="sm"
                src={imgIcon}
                alt="avatar"
            />
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Upload Image</DialogHeader>
                <DialogBody>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>
                            Select an image:
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>
                    </form>
                    {selectedImage && (
                        <div>
                            <h3>Preview:</h3>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Selected"
                                style={{ maxWidth: "100%", maxHeight: "200px" }}
                            />
                        </div>
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                        disabled={uploading}
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleUpload}
                        disabled={uploading}
                    >
                        <span>{uploading ? "Uploading..." : "Upload"}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
