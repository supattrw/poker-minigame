import { navLinks } from "../constants"


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="inner">
                <a className="logo justify-self">
                    POKER
                </a>
                <nav className="menu">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#aboutme">
                    <div className="aboutme group relative text-white">
                        <span>About Me</span>
                        <span className="underline" />
                    </div>
                </a>
            </div> 
        </div>
    )
}

export default NavBar