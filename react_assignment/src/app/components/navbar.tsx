import { NAVBAR_OPTIONS } from "../constants/constants"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{NAVBAR_OPTIONS.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{NAVBAR_OPTIONS.about}</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/search">{NAVBAR_OPTIONS.search}</Link>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavBar
