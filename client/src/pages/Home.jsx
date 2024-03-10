import React, { useState, useEffect } from "react";
import search from "../utils/API";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import {
    Button,
    Input
} from "@material-tailwind/react";


import 'swiper/css/bundle';
import '../assets/styles/swiperStyles.css';

export default function Home() {

    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (


        <>

            <div className="flex flex-col justify-center bg-neutral-200">
                <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
                    <div className="flex overflow-hidden relative flex-col pb-20 w-full min-h-[1024px] max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="/images/dnd_characters.jpeg"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col self-center mt-72 mb-48 w-full max-w-[1098px] max-md:my-10 max-md:max-w-full">
                            <div className="self-center text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                                Welcome to DND Manager!
                            </div>
                            <div className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                                Don’t worry, your characters are safe with us
                            </div>
                            <div className="self-center mt-5 text-2xl text-center text-white max-md:max-w-full">
                                Use our easy-to-use platform to effortlessly organize and access
                                your DnD Characters. With us, you can master your adventures from
                                anywhere, ensuring your characters are always primed for epic
                                quests.
                            </div>
                            <div className="self-start mt-10 ml-12 text-2xl text-white max-md:max-w-full">
                                Sign in or Register a new account to start managing those DnD
                                Characters!
                            </div>
                            <div className="flex gap-1.5 pr-20 mt-2.5 whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                                <div className="w-full max-md:w-1/2 relative">
                                    <Input
                                        type="email"
                                        label="Email Address"
                                        value={email}
                                        color="white"
                                        variant="standard"
                                        onChange={onChange}
                                        className="pr-20"
                                        containerProps={{
                                            className: "min-w-0",
                                        }}
                                    />
                                    <Button
                                        size="sm"
                                        color={email ? "gray" : "blue-gray"}
                                        disabled={!email}
                                        className="!absolute right-1 top-1 rounded"
                                        onClick={() => {
                                                localStorage.setItem("email", email);
                                                window.location.href = "/login";
                                        }}
                                    >
                                        Login
                                    </Button>
                                </div>
                                <div className="flex gap-1.5">
                                    <Link to="/register">

                                        <Button
                                            color="blue"
                                            buttonType="filled"
                                            size="large"
                                            rounded={true}
                                            block={false}
                                            iconOnly={false}
                                            ripple="light"
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );

}