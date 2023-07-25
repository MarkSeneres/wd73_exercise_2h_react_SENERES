import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <h2 className="logo">Lo<span>go</span></h2>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar