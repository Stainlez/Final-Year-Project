
import { loader } from '../../vanLoader';
// import { data as vans } from '../../../Data';
// import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const HostVans = ({ hostId }) => {
    const { vans } = useLoaderData(loader);

    // Filter vans by hostId
    const filteredVans = vans.filter(van => van.hostid === hostId);
    
    
    // const [hostVans, setHostVans] = useState([])
    // useEffect(() => {
    //     const filteredVans = vans.filter(van => van.hostid);
    //     setHostVans(filteredVans);
    // }, []);

    const hostVansEls = filteredVans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
    
    return (
        <section>
            <h1 className="host-vans-title">Your listed products</h1>
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
            </div>
        </section>
    )
}

export default HostVans
