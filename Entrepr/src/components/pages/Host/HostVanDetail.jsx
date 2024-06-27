
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { loader } from '../../vanLoader';
// import { useState, useEffect } from 'react';
// import { useParams, Link, NavLink, Outlet } from "react-router-dom"
// import { data as vans } from '../../../Data';

const HostVanDetail = () => {
    const { vans } = useLoaderData(loader);
    const { id } = useParams();
    const currentVan = vans.find(van => van.id === id);

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    // const [currentVan, setCurrentVan] = useState(null);
    // useEffect(() => {
    //     const van = vans.find(v => v.id === id);
    //     setCurrentVan(van);
    // }, [id]);
    // if (!currentVan) {
    //     return <div>Loading...</div>;
    // }
    
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}

export default HostVanDetail
