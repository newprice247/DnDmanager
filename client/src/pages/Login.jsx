import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { Link } from "react-router-dom";
import { AnimationEvent } from "react";
import Auth from "../utils/auth";
import { loginUser } from "../utils/API";

import {
    Input,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";


export default function LoginPage() {
    const [userFormData, setUserFormData] = useState({
        email: "",
        password: ""
    });
    const [inviteEmail, setInviteEmail] = useState("");
    const [inviteUsername, setInviteUsername] = useState("");
    useEffect(() => {
        try {
            const email = localStorage.getItem("email");
            const username = localStorage.getItem("username");
            if (email && username) {
                setInviteEmail(email);
                setInviteUsername(username);

                localStorage.removeItem("email");
                localStorage.removeItem("username");
            }
        } catch (error) {
            console.error(error);
        }
    }, []);
    useEffect(() => {
        console.log(userFormData);
    }, [userFormData]);

    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false);
    const handleLoginError = () => setError(!error);
    const handleOpen = () => setOpen(!open);

    const handleLogin = async () => {
        try {
            const lowerCaseEmail = userFormData.email.toLowerCase();
            setUserFormData({ ...userFormData, email: lowerCaseEmail });
            const response = await loginUser(userFormData);
            if (response.status !== 200) {
                handleLoginError();
                return;
            }
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        }
        catch (err) {
            console.error(err);
            handleLoginError();
        }
    };

    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Dialog size="sm" open={open} handler={handleOpen}>
                    <DialogHeader>
                        <h5 className="text-myColor-2">Oops!</h5>
                    </DialogHeader>
                    <DialogBody>
                        <p className="text-myColor-2">Please enter your correct email and password to login.</p>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            color="red"
                            buttonType="link"
                            onClick={(e) => setOpen(false)}
                            ripple="dark"
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </Dialog>
                <Dialog size="sm" open={error} handler={handleLoginError}>
                    <DialogHeader>
                        <h5 className="text-myColor-2">Oops!</h5>
                    </DialogHeader>
                    <DialogBody>
                        <p className="text-myColor-2">Please enter your correct email and password!</p>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            color="red"
                            buttonType="link"
                            onClick={(e) => setError(false)}
                            ripple="dark"
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </Dialog>
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img
                        // will rotate image constantly
                        className="w-8 h-8 mr-2 animate-spin animate-bounce"
                        src="./svg/numerology.svg"
                        alt="logo"
                    />
                    DnD Manager
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            {inviteUsername ? `Welcome back, ${inviteUsername}!` : "Sign in to your account"}
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder={"Email Address"}
                                value={inviteEmail ? inviteEmail : ""}
                                
                                required="true"
                                    onChange={(e) => {
                                        setUserFormData({
                                            ...userFormData,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true"
                                    onChange={(e) => {
                                        setUserFormData({
                                            ...userFormData,
                                            password: e.target.value
                                        })
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleLogin();
                                        }}
                                    }
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (userFormData.email === "" || userFormData.password === "") {
                                        handleOpen();
                                        return;
                                    }
                                    // sets the form data to the user's email and password as variables
                                    let emailVal = document.getElementById("email").value;
                                    let passwordVal = document.getElementById("password").value;
                                    // sets the userFormData to the user's email and password
                                    setUserFormData({
                                        email: emailVal,
                                        password: passwordVal,

                                    });
                                    // calls the handleLogin function
                                    handleLogin();
                                }}
                            >Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}