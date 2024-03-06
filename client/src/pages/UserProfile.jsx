import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function UserProfile() {
    const [user, setUser] = useState({
        id: "",
        username: "",
        email: "",
        characters: []
    });
    const userId = Auth.getProfile().data._id;
    useEffect(() => {
        search.getUser(userId)
            .then((data) => {
                setUser({
                    id: data._id,
                    username: data.username,
                    email: data.email,
                    characters: data.characters
                });
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [userId]);

    useEffect(() => {
        console.log(user);
    }
        , [user]);

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
            <div
                className="flex justify-center align-center"
            >
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-2xl font-semibold text-blue-gray-700">
                        Your Characters
                    </h2>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        {user.characters.map((character) => (
                            <div
                                key={character._id}
                                className="flex flex-col items-center justify-center w-full h-full"
                            >
                                <h3 className="text-xl font-semibold text-blue-gray-700">
                                    {character.name}
                                </h3>
                                <p className="text-blue-gray-500">
                                    {character.class} - Level {character.level}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}