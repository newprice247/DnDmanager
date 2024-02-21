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
    }
}

export default search;