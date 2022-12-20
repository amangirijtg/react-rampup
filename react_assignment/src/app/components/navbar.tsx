import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search A User</Link>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavBar
