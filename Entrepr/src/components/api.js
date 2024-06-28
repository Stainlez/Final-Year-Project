// api.js

import { data } from '../Data';
import { users } from '../Data';

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


export async function authenticateUser(email, password) {
    // Simulate an async operation, like a database call
    //remove promise here
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user)=>user.email === email && user.password === password)
            // console.log("user", user);
            if (user) {
                resolve(user);
            } else {
                reject(new Error("No user with those credentials found!"));
            }
        }, 1000); // Simulate a delay
    });
}