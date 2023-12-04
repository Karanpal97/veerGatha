import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const api = "https://veergatha1-0.onrender.com/";

const Login = () => {

  
  
    const navigate=useNavigate()
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
         
            const response = await axios.post(api + "auth/login/viewer/", formData);
            localStorage.setItem("isLoggedIn", "true");
            console.log("this is the test",response.data)
            // console.log("Response:", response.data);
            // if(response) dispatch(logIn(userData));
            Cookies.set("myToken", response.data.token.access, { expires: 30 });

            navigate('/home');
        } catch (error) {
            console.error("Error:", error);

            
            if (error.response && error.response.status === 400) {
                setErrorMessage("Incorrect email or password");
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
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
                    Login
                </Typography>
                {errorMessage && (
                    <Typography variant="p" color="red" className="mt-1">
                        {errorMessage}
                    </Typography>
                )}
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
                            type="password"
                            size="lg"
                            label="Password"
                            color="white"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <Button
                        className="mt-6"
                        fullWidth
                        color="white"
                        type="submit"
                    >
                        Login
                    </Button>
                    <span className="text-blue-gray-200"> Not a user?<a href="/signup" className=  "text-white font-bold hover:text-light-green-300"> Signup</a></span>
                </form>
          </Card>
        </div>
    ); };
 export default Login;
// import React from 'react'
// import Container from "../Container/Container"

// // import LogoutBtn from './LogOutBtn'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Login() {



//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               {/* <Logo width='70px'   /> */}

//               </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
// //                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {/* {authStatus && (
//             //   <li>
//             //     <LogoutBtn />
//             //   </li>
//             )} */}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Login
