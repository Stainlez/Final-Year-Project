// api.js

import { data } from '../Data';

// Function to get all data
export async function getAllData() {
    return data;
}

// Function to get data by id
export const getDataById = (id) => {
    return data.find(item => item.id === id);
};

// Function to get data by type
export const getDataByType = (type) => {
    return data.filter(item => item.type === type);
};

// Export the functions
export default {
    getAllData,
    getDataById,
    getDataByType
};
