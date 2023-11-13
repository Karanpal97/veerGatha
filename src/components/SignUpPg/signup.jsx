import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const api = "https://veergatha1-0.onrender.com/";

const Signup = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        email:"",
        name:"",
        password:"",
        password2:""
    });
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
           
            const response = await axios.post(
                "https://veergatha1-0.onrender.com/auth/register/viewer/",
                formData
            );
            
          navigate("/login")
        } catch (error) {
            console.error("Error message is :", error);
        }
    };

    return (
        <div className="relative h-screen w-screen lg:w-auto flex justify-center items-center bg-cover">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg" />
            <Card
                color="transparent"
                shadow={false}
                className="relative z-10 w-80 max-w-screen-lg sm:w-96 text-center"
            >
                <Typography variant="h1" color="white">
                    SignUp
                </Typography>
                <Typography
                    color="white"
                    className="text-[0.9rem] mt-1 font-normal "
                >
                    Enter your details to SignUp.
                </Typography>
                <form className="mt-8 mb-2" onSubmit={handleFormSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            size="lg"
                            label="Email"
                            color="white"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        <Input
                           
                            size="lg"
                            label="Name"
                            color="white"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            
                        />
                        <Input
                            size="lg"
                            label="password"
                            color="white"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                        <Input
                            type="password"
                            size="lg"
                            label="Re-enter Password"
                            color="white"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password2: e.target.value,
                                })
                            }
                        />
                         
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="white"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <p
                                
                                    className="font-medium transition-colors hover:text-white-900"
                                >
                                    &nbsp;Terms and Conditions
                                </p>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth color="white" onClick={handleFormSubmit}>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Signup;
