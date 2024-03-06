import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function UserProfile() {
    const [user, setUser] = useState({});
    const userId = Auth.getProfile().data._id;
    useEffect(() => {
        search.getUser(userId)
            .then((data) => {
                console.log(data);
                setUser(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [userId]);

    return (
        <div
        className="flex flex-col items-center justify-center w-full h-full"
        >
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-3xl font-semibold text-blue-gray-700">
                    Welcome, {user.username}!
                </h1>
                <p className="text-blue-gray-500">
                    Your email is {user.email}
                </p>
            </div>
        </div>
    );
}