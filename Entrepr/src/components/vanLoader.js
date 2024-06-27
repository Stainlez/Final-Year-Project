// vanLoader.js

import { getAllData } from './api';
// console.log(getAllData())
export async function loader() {
    const vans = await getAllData();
    return { vans };
    // console.log(vans)
}
