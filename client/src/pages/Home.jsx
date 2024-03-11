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

async function handleLoginOrRegister(email) {
    await search.getUserByEmail(email).then((res) => {
        console.log(res);
        if (res.email === email) {
            localStorage.setItem("email", email);
            localStorage.setItem("username", res.username);
            window.location.replace("/login");
        } else {
            localStorage.setItem("email", email);
            window.location.replace("/register");
        }
    });
}

export default function Home() {

    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (


        <>

            <div className="flex flex-col justify-center bg-neutral-200">
                <div className="flex flex-col justify-center w-full bg-white">
                    <div className="flex overflow-hidden relative flex-col pb-20 w-full h-[100vh]">
                        <img
                            loading="lazy"
                            srcSet="/images/dnd_characters.jpeg"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col items-center sm:my-20 md:my-30 lg:my-40 xl:my-60">
                            <div className="">
                                Welcome to DND Manager!
                            </div>
                            <div className="">
                                Don’t worry, your characters are safe with us
                            </div>
                            <div className="">
                                Use our easy-to-use platform to effortlessly organize and access
                                your DnD Characters. With us, you can master your adventures from
                                anywhere, ensuring your characters are always primed for epic
                                quests.
                            </div>
                            <div className="">
                                Sign in or Register a new account to start managing those DnD
                                Characters!
                            </div>
                            <div className="w-full">
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