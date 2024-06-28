import React, { useEffect } from 'react' //useLayoutEffect
import { NavLink, Outlet, useNavigate } from "react-router-dom" //redirect

const HostLayout = () => {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

//     const navigate = useNavigate()
//  useEffect(()=>{
//     // const timeout = setInterval(()=>{
//     // }, 10 * 1000)
//     //    return clearInterval(timeout)
//         const user =  localStorage.getItem("loggedin")
//         if(!user){
//         navigate ("/login?message=You must log in first.")
    
//         }

// }, [])



    
    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>
                
                <NavLink
                    to="vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>

                <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet />
        </>
    )}

export default HostLayout
