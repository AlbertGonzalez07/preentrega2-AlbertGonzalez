
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import "./navBar.scss"
import CartWidget from "./cartwidget"
import { Link } from "react-router-dom"


const Navbar = () => {





  return (
    <nav className="navbar">

        <Link to="/" className="brand">
          <img src="./public/img/logo.png" alt="logo" />
          <p className="title-brand">Albert Gonzalez </p>
        </Link>

        <ul className="categories">
         <Link to="/category/calzado" className="category">Calzado</Link>
         <Link to="/category/ropa" className="category">Ropa</Link>
         <Link to="/category/accesorio" className="category">Accesorios</Link>
        </ul>

    
      <CartWidget />

    </nav>
  )
}

export default Navbar


