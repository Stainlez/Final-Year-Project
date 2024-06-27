
// import { useState } from 'react';
// import { data as initialData  } from '../../Data';
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
// import { getAllData } from '../api';
import { loader } from '../vanLoader';




function VansList() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { vans } = useLoaderData(loader);
    // const [error, setError] = useState(null)
    // const [data, setData] = useState([]);
    

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans

    //Without setTimeout
    // useEffect(() => {
    // // Simulate fetching data
    //     const fetchData = async () => {
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //         setData(initialData);
    //     };
    //     fetchData();
    // }, []);

    //With setTimeout
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const allVans = await new Promise((resolve) => {
    //             setTimeout(() => {
    //                 resolve(api.getAllData());
    //             }, 500); // Simulate a delay of 1 second
    //         });
    //         setData(allVans);
    //     };

    //     fetchData();
    // }, []);

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            {/* <Link to={`/vans/${van.id}`}> */}
            <Link 
                to={van.id} 
                state={{ 
                    search: `?${searchParams.toString()}`, 
                    type: typeFilter 
                }}
            >
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )

    // return (
    //     <div className="van-list-container">
    //         <h1>Explore our van options</h1>
    //         <div className="van-list">
    //             {data.map((van) => (
    //                 <div key={van.id} className="van-tile">
    //                     <Link to={`/vans/${van.id}`}>
    //                     <img src={van.imageUrl} alt={van.name} />
    //                     <div className='van-info'>
    //                         <h2>{van.name}</h2>
    //                         <p>Price: ${van.price}/day</p>
    //                     </div>
    //                     <i className={`van-type ${van.type} selected`}>{van.type}</i>
    //                     {/* <p>Type: {van.type}</p> */}
    //                     {/* <p>{van.description}</p> */}
    //                     </Link>
    //                 </div>
    //             ))}
    //         </div>       
        
    //     </div>
    //     );
}

export default VansList;


