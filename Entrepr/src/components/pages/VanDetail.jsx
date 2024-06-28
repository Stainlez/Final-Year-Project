// import { loader } from '../vanLoader';

// import { data } from '../../Data';
// import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"



export default function VanDetail() {

    const { id } = useParams(); // Get id from URL params
    const location = useLocation(); // Get current location
    const { vans } = useLoaderData(); // Fetch data using loader()
    
    // Find the van with matching id
    const van = vans.find(van => van.id === id);
    if (!van) {
        return <div>Loading...</div>; // Handle loading state or error if van not found
    }
    
    // Extracting search parameters from location
    const search = location.search;
    // Extracting type from location state
    const type = location.state?.type || 'all';

    // const location = useLocation()
    // const { id } = useParams();
    // const [van, setVan] = useState(null);
    // useEffect(() => {
    //     const vanData = data.find(v => v.id === id);
    //     setVan(vanData);
    // }, [id]);
    // const search = location.state?.search || ""
    // const type = location.state?.type || "all"
    // if (!van) {
    //     return <div>Loading...</div>; // Handle loading state or error if van not found
    // }



    // const location = useLocation()
    // const { vans } = useLoaderData(loader);
    // const { id } = useParams();
    // // Find van by id
    // const van = vans.find(van => van.id === id);
    // if (!van) {
    //     return <div>Loading...</div>; // or handle not found case
    // }
    


    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            <div className="van-detail">
                <img alt={van.name} src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>
                    {van.type}
                </i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>

        </div>
    )

    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id])

    // return (
    //     <div className="van-detail-container">
    //         {van ? (
    //             <div className="van-detail">
    //                 <img alt={van.name} src={van.imageUrl} />
    //                 <i className={`van-type ${van.type} selected`}>
    //                     {van.type}
    //                 </i>
    //                 <h2>{van.name}</h2>
    //                 <p className="van-price"><span>${van.price}</span>/day</p>
    //                 <p>{van.description}</p>
    //                 <button className="link-button">Rent this van</button>
    //             </div>
    //         ) : <h2>Loading...</h2>}
    //     </div>
    // )
}