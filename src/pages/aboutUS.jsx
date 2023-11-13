import { React, useEffect, useState } from "react";
// import bg from "../assets/army 1.png"
import bg1 from "../assets/bgAbutus1.jpeg";
import bg2 from "../assets/bg3.png";
import NavbarSimple from "../components/navBar";
const AboutusPg = () => {
    return (
        <>
            <div>
                <div
                    style={{
                        background: `url(${bg2})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="relative h-[50vh] lg:h-[100vh]"
                >
                    <div className="  absolute z-[10] w-[100vw]">
                        <NavbarSimple />
                    </div>
                    <div className=" absolute z-[3] right-[30px] bottom-[140px] lg:right-[140px] lg:bottom-[260px]">
                        <h1 className="text-white font-bold text-[4rem] lg:text-[7rem]">
                            VeerGatha
                        </h1>
                    </div>
                    <div className="absolute z-[1] inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm" />
                </div>

                <div className="text-center bg-[#faf9f6] ">
                    <h2 className=" text-[2.5rem] lg:text-[4rem] p-[1.5rem] font-bold">
                        About US
                    </h2>
                    <div className=" text-[1rem] lg:text-[1.4rem] font-normal mx-[1rem] lg:mx-[10rem] p-[3rem] border rounded  bg-b[#f7f7ec]">
                        <span className=" py-[2rem] ">
                            The name "Veer Gatha" embodies the essence of our
                            mission. "Veer" stands for bravery, while "Gatha"
                            means chronicle. Together, they symbolize the heroic
                            chronicles we aim to narrate. These are the tales of
                            those who, through their actions and sacrifices,
                            shaped the destiny of a nation. Veer Gatha" is not
                            just a name; it's a tribute to the unsung heroes
                            who, through their actions and sacrifices, have
                            remained veiled in the shadows of history. Our
                            platform serves as a sanctuary for the untold
                            stories of individuals whose indomitable spirit and
                            unwavering courage have left an indelible mark on
                            the canvas of Indian wars.
                        </span>
                        <span className=" py-[2rem]  flex ">
                            Our dedication extends beyond mere storytelling; it
                            is a mission to preserve and share these narratives,
                            fostering a deep appreciation for the sacrifices
                            made by these heroes. By immortalizing their
                            stories, we seek to inspire future generations,
                            instilling in them a sense of pride and reverence
                            for the courageous souls who shaped the course of
                            our nation
                        </span>
                        <span className=" py-[2rem]  flex ">
                            "Veer Gatha" stands as a testament to the
                            resilience, determination, and bravery of those who
                            often go unrecognized. Through our platform, we
                            invite individuals to join us on a journey of
                            discovery—a journey that unveils the hidden chapters
                            of history, weaving together tales of valor that
                            deserve a place in the collective memory of our
                            nation. As we embark on this chronicle of bravery,
                            our commitment remains unwavering: to ensure that
                            these unsung heroes receive the recognition and
                            homage they rightfully deserve.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutusPg;
