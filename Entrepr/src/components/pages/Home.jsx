import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Get your goods and services here!</h1>
            <p>Add adventure to your life by joining the unnStudentEntrepreneur movement. Buy/Hire the perfect merchant to provide value for your money!</p>
            <Link to="vans" className="home-link">See our products</Link>
        </div>
    )
};