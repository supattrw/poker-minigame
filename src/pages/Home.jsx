import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { navLinks } from "../constants"

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1 className="title">WELCOME TO THE TABLE</h1>
            <h3>Pick a game from the menu to start playing</h3>

            <div className="home-btn relative">
                <ul>
                    {navLinks.map(({ link, name }) => (
                        <li key={name} className="group button-game">
                            <Button variant="primary" 
                                onClick={() => navigate(link)} 
                            >
                                {name}
                            </Button>
                        </li>
                    ))}  
                </ul>
                               
            </div>
        </div>
    )
}

export default Home