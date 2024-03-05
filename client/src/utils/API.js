import axios from "axios";

export const createUser = (userData) => {
    try {
        return fetch('/players/users/register'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
    } catch (error) {
        console.log(`Unable to create user ${userData}`);
        console.log(error);
    }
}

export const loginUser = (userData) => {
    return fetch('/players/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    
}

export const updateUser = (userID, userData) => {
    try {
        return fetch(`/players/users/${userID}`), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
    } catch (error) {
        console.log(`Unable to update user ${userID}, ${userData}`);
        console.log(error);
    }
}

export const registerUser = (userData) => {
    console.log(`registerUser: ${userData}`);
    return fetch('/players/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
}


const search = {
    getL1: async () => {
        try {
            const response = await axios.get(`/api`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    getL2: async (category) => {
        try {
            const response = await axios.get(`/api/${category}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    getL3: async (fullURL) => {
        try {
            const response = await axios.get(`${fullURL}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    getUsers: async () => {
        try {
            const response = await axios.get(`/api/users`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    getUser: async (id) => {
        try {
            const response = await axios.get(`/api/users/${id}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    getCharacters: async (id) => {
        try {
            const response = await axios.get(`/api/characters`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    getCharacter: async (name) => {
        try {
            const response = await axios.get(`/api/characters/${name}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
}

export default search;