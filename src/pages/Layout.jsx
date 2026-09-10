import NavBar from "../components/NavBar"
import AboutMe from "./AboutMe"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <NavBar />
            <section id="hero" className="relative overflow-hidden">
                <div className="hero-layout">
                    <div className="table-box">
                        <Outlet />
                    </div>
                </div>
            </section>
            <AboutMe />
        </>
    )
}

export default Layout