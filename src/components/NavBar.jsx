import { Link } from "react-router-dom"
import { navLinks } from "../constants"


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="inner">
                <Link to={""} className="logo justify-self">
                    POKER
                </Link>
                <nav className="menu">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <Link to={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div> 
        </div>
    )
}

export default NavBar