
import React, { useState, useEffect } from 'react';
import { data as initialData  } from '../../Data';

function VansList() {
    const [data, setData] = useState([]);

    useEffect(() => {
    // Simulate fetching data
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setData(initialData);
        };
        fetchData();
    }, []);

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {data.map((van) => (
                    <div key={van.id}>
                        <h2>{van.name}</h2>
                        <p>Price: ${van.price}/day</p>
                        <p>{van.description}</p>
                        <img src={van.imageUrl} alt={van.name} />
                        <p>Type: {van.type}</p>
                    </div>
                ))}
            </div>       
        
        </div>
        );
}

export default VansList;


// import React from "react"
// import { data } from "../../Data"

// /**
//  * Challenge: Wrap the contents of the "van-tile" div in a 
//  * Link that sends the user to `/vans/${van-id-here}`.
//  */


// export const Vans = () => {
    
//     // let vanElements = data.map(van => {
//     //     return(
//     //             <div key={van.id} className="van-tile">
//     //                 <img alt={van.name} src={van.imageUrl} />
//     //                 <div className="van-info">
//     //                     <h3>{van.name}</h3>
//     //                     <p>${van.price}<span>/day</span></p>
//     //                 </div>
//     //                 <i className={`van-type ${van.type} selected`}>{van.type}</i>
//     //             </div>
//     //     )
//     // })
//     // // const [vans, setVans] = React.useState([vanElements])
//     // // React.useEffect(() => {
//     // //     fetch("/api/vans")
//     // //         .then(res => res.json())
//     // //         .then(data => setVans(data.vans))
//     // // }, [])

//     // // const vanElements = vans.map(van => (
//     // //     <div key={van.id} className="van-tile">
//     // //         <img alt={van.name} src={van.imageUrl} />
//     // //         <div className="van-info">
//     // //             <h3>{van.name}</h3>
//     // //             <p>${van.price}<span>/day</span></p>
//     // //         </div>
//     // //         <i className={`van-type ${van.type} selected`}>{van.type}</i>
//     // //     </div>
//     // // ))

//     return (
//         <div className="van-list-container">
//             <h1>Explore our van options</h1>
//             <div className="van-list">
//                 {/* {vanElements} */}
//                 <div>
//                 {data.map((van) => (
//                     <div key={van.id}>
//                     <h2>{van.name}</h2>
//                     <p>Price: ${van.price}/day</p>
//                     <p>{van.description}</p>
//                     <img src={van.imageUrl} alt={van.name} />
//                     <p>Type: {van.type}</p>
//                 </div>
//       ))}
//     </div>
//             </div>
//             {/* <div className="van-list">
//             <div key={props.id} className="van-tile">
//             <img alt={props.name} src={props.imageUrl} />
//             <div className="van-info">
//                 <h3>{props.name}</h3>
//                 <p>${props.price}<span>/day</span></p>
//             </div>
//             <i className={`van-type ${props.type} selected`}>{props.type}</i>
//         </div>
//             </div> */}

//         </div>
//     )
// }