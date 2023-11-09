import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">   
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <span>Coded by Andre Arante</span>
                <div className="social">
                    <a href="#"><img src="src/assets/github.webp" alt="" /></a>
                    <a href="#"><img src="src/assets/github.webp" alt="" /></a>
                    <a href="#"><img src="src/assets/github.webp" alt="" /></a>
                    <a href="#"><img src="src/assets/github.webp" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar