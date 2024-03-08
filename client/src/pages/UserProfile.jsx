import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { createCharacter } from "../utils/API";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Menu,
    MenuItem,
    MenuHandler,
    MenuList,
    Input,
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

function NewCharacterDropdown(props) {
    return (
        <Menu>
            <MenuHandler>
                <Button
                    color="blue"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                >New Character</Button>
            </MenuHandler>
            <MenuList>
                {props.children}
            </MenuList>
        </Menu>
    );
}

function NewCharacterDropdownItem(props) {
    return (
        <MenuItem>
            {props.children}
        </MenuItem>
    );
}

function handleChange(event) {
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
}



export default function UserProfile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [backgrounds, setBackgrounds] = useState([]);
    useEffect(() => {
        search.getClasses()
            .then((data) => setClasses(data))
            .catch((error) => console.error("Error fetching classes:", error));
        search.getRaces()
            .then((data) => setRaces(data))
            .catch((error) => console.error("Error fetching races:", error));
        search.getBackgrounds()
            .then((data) => setBackgrounds(data))
            .catch((error) => console.error("Error fetching backgrounds:", error));
    }, []);


    const [character, setCharacter] = useState({
        name: "",
        level: 1,
        class: "",
        race: "",
        background: "",
        alignment: "",
        experience: 0,
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8,
        user: Auth.getProfile().data._id
    });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setCharacter({ ...character, [name]: value });
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        createCharacter(character)
            .then((data) => {
                console.log(data);
                setShowModal(false);
            })
            .catch((error) => console.error("Error creating character:", error));
    };
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
                    <Button
                        color="blue"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => handleOpen()}
                    > New Character</Button>
                    <Dialog
                        open={open}
                        handler={handleOpen}
                    >
                        <DialogHeader>
                            <h5 className="text-2xl font-semibold">Create a New Character</h5>
                        </DialogHeader>
                        <DialogBody>
                            <form
                                className="flex flex-col items-center justify-center w-full h-full"
                                onSubmit={handleSubmit}
                            >
                                <p>Name</p>
                                <Input
                                    type="text"
                                    name="name"
                                    value={character.name}
                                    onChange={handleChange}
                                    placeholder="Character Name"
                                />
                                {/* <NewCharacterDropdown
                                    children={classes.map((characterClass) => (
                                        <NewCharacterDropdownItem >
                                            <button
                                                type="button"
                                                onClick={() => setCharacter({ ...character, class: characterClass.name })}
                                            >{characterClass.name}</button>
                                        </NewCharacterDropdownItem>
                                    ))} />
                                <NewCharacterDropdown />
                                <NewCharacterDropdown
                                    children={races.map((race) => (
                                        <NewCharacterDropdownItem >
                                            <button
                                                type="button"
                                                onClick={() => setCharacter({ ...character, race: race.name })}
                                            >{race.name}</button>
                                        </NewCharacterDropdownItem>
                                    ))} />
                                <NewCharacterDropdown
                                    children={backgrounds.map((background) => (
                                        <NewCharacterDropdownItem >
                                            <button
                                                type="button"
                                                onClick={() => setCharacter({ ...character, background: background.name })}
                                            >{background.name}</button>
                                        </NewCharacterDropdownItem>
                                    ))}
                                />  */}
                                <p>Alignment</p>
                                <Input
                                    type="text"
                                    name="alignment"
                                    value={character.alignment}
                                    onChange={handleChange}
                                    placeholder="Alignment"
                                />
                                <p>Experience</p>
                                <Input
                                    type="number"
                                    name="experience"
                                    value={character.experience}
                                    onChange={handleChange}
                                    placeholder="Experience"
                                />
                                <Button
                                    color="blue"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                    type="submit"
                                >Create Character</Button>
                            // </form>


                        </DialogBody>
                    </Dialog>


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
        </div >
    );
}

