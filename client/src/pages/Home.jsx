import React, { useState, useEffect } from "react";
import search from "../utils/API";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../assets/styles/slideShow.css"

import {
    homeImagesLarge,
    homeImagesSmall
} from "../assets/data/homeImages";

import {
    Button,
    Input
} from "@material-tailwind/react";


import 'swiper/css/bundle';
import '../assets/styles/swiperStyles.css';

async function handleLoginOrRegister(email) {
    await search.getUserByEmail(email).then((res) => {
        console.log(res);
        if (res === null) {
            localStorage.setItem("email", email);
            window.location.href = "/register";
        } else if (res.email === email) {
            localStorage.setItem("email", email);
            localStorage.setItem("username", res.username);
            window.location.href = "/login";
        }
    });
}


export default function Home() {

    const [email, setEmail] = React.useState("");

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = window.innerWidth > 768 ? homeImagesLarge : homeImagesSmall;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);
    const onChange = ({ target }) => setEmail(target.value);
    return (


        <>

            <div className="flex flex-col justify-center bg-neutral-200">
                <div className="flex flex-col justify-center w-full bg-white">

                    <div className="backgroundSlider">
                        {images.map((image, index) => (
                            <div
                                key={image.src}
                                className={`backgroundImage ${index === currentImageIndex ? "visible" : ""}`}
                                style={{ backgroundImage: `url(${image.src})` }}
                            />
                        ))}

                        <div
                            className="flex flex-col items-center my-[5rem] p-5 pr-10 bg-black bg-opacity-50 w-full h-full text-white space-y-5 text-center"

                        >
                            <div
                                className="xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                            >
                                Welcome to DND Manager!
                            </div>
                            <div
                                className="xxs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                            >
                                Don’t worry, your characters are safe with us
                            </div>
                            <div
                                className="xxs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                            >
                                Use our easy-to-use platform to effortlessly organize and access
                                your DnD Characters. With us, you can master your adventures from
                                anywhere, ensuring your characters are always primed for epic
                                quests.
                            </div>
                            <div
                                className="xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                            >
                                Sign in or Register a new account to start managing those DnD
                                Characters!
                            </div>
                            <div
                                className="xxs:w-full xs:w-full sm:w-full md:w-80 lg:w-70 xl:w-60"
                            >
                                <div className="w-full relative">
                                    <Input
                                        type="email"
                                        label="Email Address"
                                        value={email}
                                        color="white"
                                        variant="outline"
                                        onChange={onChange}
                                        className="pr-20 "
                                        containerProps={{
                                            className: "min-w-0",
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                handleLoginOrRegister(email);
                                            }
                                        }}
                                    />
                                    <Button
                                        size="sm"
                                        color={email ? "gray" : "blue-gray"}
                                        disabled={!email}
                                        className="!absolute right-1 top-1 rounded"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLoginOrRegister(email);
                                        }}

                                    >
                                        Login / Register
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}