import axios from "axios";


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