import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { createCharacter, updateUser, addCharacterToUser } from "../utils/API";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import CharacterCard from "../components/CharacterCard";
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
    const [alignment, setAlignment] = useState([]);
    useEffect(() => {
        search.getClasses()
            .then((data) => {
                console.log(data);
                setClasses(data.results)
            })
            .catch((error) => console.error("Error fetching classes:", error));
        search.getRaces()
            .then((data) => setRaces(data.results))
            .catch((error) => console.error("Error fetching races:", error));
        search.getBackgrounds()
            .then((data) => setBackgrounds(data.results))
            .catch((error) => console.error("Error fetching backgrounds:", error));
        search.getAlignments()
            .then((data) => setAlignment(data.results))
            .catch((error) => console.error("Error fetching alignment:", error));
    }, []);


    const [character, setCharacter] = useState({
        name: "",
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCharacter({ ...character, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createCharacter(character)
            .then(async (data) => {
                handleOpen();
                window.location.reload();
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
                        <DialogBody
                        className="overflow-scroll h-96"
                        >
                            <form
                                className="flex flex-col items-center justify-center"
                                onSubmit={handleSubmit}
                            >
                                <p>Name</p>
                                <Input
                                    type="text"
                                    name="name"
                                    value={character.name}
                                    className="mb-4"
                                    onChange={handleChange}
                                    placeholder="Character Name"
                                />

                                <p>Alignment</p>
                                <select
                                    name="alignment"
                                    value={character.alignment}
                                    className="w-full border-2 border-gray-300 rounded-md p-2"
                                    onChange={handleChange}
                                >
                                    <option value="">Select an Alignment</option>
                                    {alignment.map((alignmentData) => (
                                        <option key={alignmentData._id} value={alignmentData.name}>{alignmentData.name}</option>
                                    ))}
                                </select>
                                <p>Experience</p>
                                <Input
                                    type="number"
                                    name="experience"
                                    value={character.experience}
                                    onChange={handleChange}
                                    placeholder="Experience"
                                />
                                <p>Class</p>
                                <select
                                    name="class"
                                    value={character.class}
                                    className="w-full border-2 border-gray-300 rounded-md p-2"
                                    onChange={handleChange}
                                >
                                    <option value="">Select a Class</option>
                                    {classes.map((classData) => (
                                        <option key={classData._id} value={classData.name}>{classData.name}</option>
                                    ))}
                                </select>
                                <p>Race</p>
                                <select
                                    name="race"
                                    value={character.race}
                                    className="w-full border-2 border-gray-300 rounded-md p-2"
                                    onChange={handleChange}
                                >
                                    <option value="">Select a Race</option>
                                    {races.map((raceData) => (
                                        <option key={raceData._id} value={raceData.name}>{raceData.name}</option>
                                    ))}
                                </select>
                                <p>Background</p>
                                <select
                                    name="background"
                                    value={character.background}
                                    className="w-full border-2 border-gray-300 rounded-md p-2"
                                    onChange={handleChange}
                                >
                                    <option value="">Select a Background</option>
                                    {backgrounds.map((backgroundData) => (
                                        <option key={backgroundData._id} value={backgroundData.name}>{backgroundData.name}</option>
                                    ))}
                                </select>
                                <p>Strength</p>
                                <Input
                                    type="number"
                                    name="strength"
                                    value={character.strength}
                                    onChange={handleChange}
                                    placeholder="Strength"
                                />
                                <p>Dexterity</p>
                                <Input
                                    type="number"
                                    name="dexterity"
                                    value={character.dexterity}
                                    onChange={handleChange}
                                    placeholder="Dexterity"
                                />
                                <p>Constitution</p>
                                <Input
                                    type="number"
                                    name="constitution"
                                    value={character.constitution}
                                    onChange={handleChange}
                                    placeholder="Constitution"
                                />
                                <p>Intelligence</p>
                                <Input
                                    type="number"
                                    name="intelligence"
                                    value={character.intelligence}
                                    onChange={handleChange}
                                    placeholder="Intelligence"
                                />
                                <p>Wisdom</p>
                                <Input
                                    type="number"
                                    name="wisdom"
                                    value={character.wisdom}
                                    onChange={handleChange}
                                    placeholder="Wisdom"
                                />
                                <p>Charisma</p>
                                <Input
                                    type="number"
                                    name="charisma"
                                    value={character.charisma}
                                    onChange={handleChange}
                                    placeholder="Charisma"
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
                                    className="mt-4"
                                >Create Character</Button>
                             </form>


                        </DialogBody>
                    </Dialog>


                    <div className="flex flex-col items-center justify-center w-full h-full">
                        {user.characters.map((character) => (
                            <CharacterCard
                                key={character._id}
                                name={character.name}
                                class={character.class}
                                race={character.race}
                                level={character.level}
                                alignment={character.alignment}
                                background={character.background}
                                strength={character.strength}
                                dexterity={character.dexterity}
                                constitution={character.constitution}
                                intelligence={character.intelligence}
                                wisdom={character.wisdom}
                                charisma={character.charisma}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

