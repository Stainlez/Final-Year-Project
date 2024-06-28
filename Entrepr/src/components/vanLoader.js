// vanLoader.js

import { getAllData } from './api';
import { authenticateUser } from './api';
import { redirect } from "react-router-dom"

// console.log(getAllData())
export async function loader() {
    const vans = await getAllData();
    return { vans };
}

// New loader that extracts "message" from the request URL
export function messageLoader({ request }) {
    // return new URL(request.url).searchParams.get("message");
    const message = new URL(request.url).searchParams.get("message");
    return message || null; // Ensure it returns a value or null
}


export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    
    // const data = 
    const data = await authenticateUser(email, password)
    
    localStorage.setItem("loggedin", true)
    // console.log(data)
    return redirect("/host")
}
