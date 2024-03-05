import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../utils/API";
import Auth from "../utils/auth";

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function SimpleRegistrationForm() {
    const [userFormData, setUserFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    useEffect(() => {
        console.log(userFormData);
    }  , [userFormData]);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Username
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Username"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => {
                                setUserFormData({ ...userFormData, username: e.target.value })
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => {
                                setUserFormData({ ...userFormData, email: e.target.value })
                            }
                            }
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => {
                                setUserFormData({ ...userFormData, password: e.target.value })
                                console.log(userFormData);
                            }
                        }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    registerUser(userFormData);
                                }
                            }}
                        />
                    </div>
                    {/* <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    /> */}
                    <Button className="mt-6" fullWidth
                        onClick={async (e) => {
                            e.preventDefault();
                            try {
                                console.log(userFormData);
                                const response = await registerUser(userFormData);
                                console.log(response);
                                if (!response.ok) {
                                    throw new Error("something went wrong!");
                                }
                                const { token, user } = await response.json();
                                console.log(token);
                                Auth.login(token);
                            } catch (err) {
                                console.error(err);
                            }
                        }}
                    >
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/login" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}