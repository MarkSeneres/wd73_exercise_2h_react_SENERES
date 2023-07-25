import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <>
    
      <nav>
      <h1 className="logo">Lo<span>go</span></h1>
        <ul>
          <li><Link className="navbar-link" to="/">Home</Link></li>
          <li><Link className="navbar-link"  to="/products">Products</Link></li>
          <li><Link className="navbar-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar