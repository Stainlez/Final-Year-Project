import React from 'react'
import { 
    useLoaderData,
    useNavigate,
    Form,
} from "react-router-dom"
// useActionData

import { action } from './vanLoader';

// import { authenticateUser } from './api';

    

const Login = () => {
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setError(null);

        const formData = new FormData(e.target);

                // Simulate the request object
                const request = {
                    formData: async () => formData
                };

        try {
            // console.log(data)
            await action({ request }).then(()=>{
                navigate("/host", { replace: true });

            })
        } catch (err) {
            setError(err);
        } finally {
            setStatus('idle');
        }
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus('submitting');
    //     setError(null);

    //     const formData = new FormData(e.target);

    //     const fakeRequest = {
    //         formData: async () => formData
    //     };

    //     action({ request: fakeRequest })
    //         .then(() => {
    //             navigate("/host", { replace: true });
    //         })
    //         .catch(err => {
    //             setError(err);
    //         })
    //         .finally(() => {
    //             setStatus('idle');
    //         });
    // };

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus("submitting")
    //     setError(null)
    //     authenticateUser(loginFormData.email, loginFormData.password)
    //         .then(data => {
    //             navigate("/host", { replace: true })
    //         })
    //         .catch(err => setError(err))
    //         .finally(() => setStatus("idle"))
    // }



        // e.preventDefault()
        // setStatus("submitting")
        // setError(null)
        // // console.log(loginFormData)
        // authenticateUser(loginFormData.email, loginFormData.password)
        // .then(data => console.log(data))
        // .catch(err => setError(err))
        // .finally(() => setStatus('idle'));

    // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    // const [status, setStatus] = React.useState("idle")
    // const [error, setError] = React.useState(null)
    // const message = useLoaderData()

 // .then(user => {
        //     // setMessage(`Welcome, ${user.username}!`);
        //     setError(null);
        // })

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}

            <Form 
                method="post" 
                className="login-form" 
                replace
                onSubmit={handleSubmit}
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )

}

export default Login


// import React from "react"
// // import { useNavigate } from "react-router-dom"

// export default function Login() {
//     const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

//     function handleSubmit(e) {
//         e.preventDefault()
//         console.log(loginFormData)
//     }

//     function handleChange(e) {
//         const { name, value } = e.target
//         setLoginFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     return (
//         <div className="login-container">
//             <h1>Sign in to your account</h1>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="Email address"
//                     value={loginFormData.email}
//                 />
//                 <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Password"
//                     value={loginFormData.password}
//                 />
//                 <button>Log in</button>
//             </form>
//         </div>
//     )

// }