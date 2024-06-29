import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom"



const Header = () => {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
        const [isVisible, setIsVisible] = useState(false);
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        

        useEffect(() => {
            const loggedInStatus = localStorage.getItem('loggedin') === 'true';
            setIsLoggedIn(loggedInStatus);
            }, []);

        const handleIconClick = () => {
            setIsVisible(!isVisible);
        };  

        
        const handleLoginLogout = () => {
            const loggedInStatus = localStorage.getItem('loggedin') === 'true';
            if (loggedInStatus) {
              // Log out, set localStorage to false, and redirect to login page
            //   localStorage.setItem('loggedin', 'false');
            localStorage.clear();
              setIsLoggedIn(false);
              history.push('/login');
            } else {
              // Log in, set localStorage to true
            //   localStorage.setItem('loggedin', 'true');
            //   setIsLoggedIn(true);
            //   history.push('/login'); // Assuming you want to redirect to profile after logging in
                return null
        }
          };

    // useEffect(() => {
    //     const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    //     setIsLoggedIn(loggedInStatus);
    //   }, []);
    
    //   const handleLoginLogout = () => {
    //     const newStatus = !isLoggedIn;
    //     localStorage.setItem('isLoggedIn', newStatus);
    //     setIsLoggedIn(newStatus);
    //   };

        // const handleLoginClick = () => {
        // setIsLoggedIn(() => !localStorage.isloggedin);
        // // localStorage.removeItem("loggedin")
        //     };



    return (
        <header>
                <img className="site-logo unn-logo" src="/assets/images/unnlogo.png" alt="" />
            <nav>
                <NavLink 
                    to="/"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                {/* <Link className="" to="/">Home</Link> */}
    
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Products
                </NavLink>

                
                <div className="icon-dropdown">
                    <img 
                        src="/assets/images/avatar-icon.png"  
                        alt="icon" 
                        onClick={handleIconClick} 
                        className="icon login-icon"
                    />
                    {isVisible && (
                        <div className="dropdown-content">
                        {localStorage.loggedin ? (
                            <Link to="/login"
                                className="logout-link"
                                onClick={handleLoginLogout}
                            >
                            Logout
                            </Link>
                            ) : (
                            <Link to="/login"
                            className="login-link"
                            // onClick={handleLoginLogout}
                            >
                            Login
                            </Link>
                            )
                        }

                        <Link to="host"
                            // style={({isActive}) => isActive ? activeStyles : null}
                        >
                            Profile
                        </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header

   {/* <Link to="login" className="login-link">
                    <img 
                        src="/assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link> 

                 {/* <Link to="login" className="login-link">
                Login
                </Link> 

                {/* <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Profile
                </NavLink> */}
