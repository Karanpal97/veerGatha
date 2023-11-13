import { React } from "react";
import NavbarSimple from "../navBarDark";
import { Avatar } from "@material-tailwind/react";
import image from "../../assets/imgs/homepgBg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import HomeCard from "./HomeCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const StoryPg = () => {
    const location = useLocation();
    const {
        title,
        author,
        summary,
        posted,
        views,
        image,
        detail,
        userdata,
        state,
        district,
    } = location.state;

    return (
        <>
            <NavbarSimple />
            <div id="PgContainer " className="m-[3rem] lg:m-[8rem]">
                <div id="Head">
                    <div
                        id="StoryTitle"
                        className=" font-poppins text-[2rem] lg:text-[3rem] text-center  font-bold"
                    >
                        {title}
                    </div>
                    <div
                        id="PublishingDetails"
                        className=" font-poppins flex text-[1rem]  justify-center gap-2 my-[4rem]"
                    >
                        <Avatar
                            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                            alt="avatar"
                        />
                        <div id="Details">
                            <div id="PublisherName" className="font-semibold">
                                {userdata}
                            </div>
                            <div
                                id="PublishingDate "
                                className=" text-[0.8rem]"
                            >
                                {posted}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="StoryContainer  "
                    className="flex flex-col justify-center items-center"
                >
                    <div>
                        <img src={image} alt="StoryBg" />
                    </div>
                    <div className="text-black mt-[2rem] font-bold lg:flex lg:justify-end">
                        {district},
                        {state}
                    </div>
                    <div
                        id="Story"
                        className="font-poppins text-[1.2rem] text-justify  my-[3rem] "
                    >
                        {detail}
                    </div>
                </div>
            </div>
            {/* <div id="ReadMore" className="m-[1rem]">
                <div id="text" className="text-gray-700 my-4 mx-[4rem]">
                    Read More --
                </div>{" "}
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px my-4"
                    partialVisbile
                    className="flex gap-10"
                >
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </Carousel>
            </div> */}
        </>
    );
};

export default StoryPg;
