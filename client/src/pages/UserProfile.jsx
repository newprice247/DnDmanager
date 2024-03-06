import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import {
    Card
} from "@material-tailwind/react";

function CharacterCard(props) {
    return (
        <Card>
            <Card.Body>
                <Link to={`/characters/${props._id}`}>
                    <h3>{props.name}</h3>
                </Link>
                <div
                className="flex flex-col items-center justify-center w-full h-full"
                >
                    <p>Level: {props.level}</p>
                    <p>Class: {props.class}</p>
                    <p>Race: {props.race}</p>
                    <p>Background: {props.background}</p>
                    <p>Alignment: {props.alignment}</p>
                    <p>Experience: {props.experience}</p>
                </div>


            </Card.Body>
        </Card>
    );
}

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
                            <CharacterCard
                                key={character._id}
                                _id={character._id}
                                name={character.name}
                                level={character.level}
                                class={character.class}
                                race={character.race}
                                background={character.background}
                                alignment={character.alignment}
                                experience={character.experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}