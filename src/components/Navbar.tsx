import { NavLink } from "react-router-dom"
import cart from "../../public/images/cart.png";

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav__links">
                <NavLink className="nav__links__item" to={"/"}>Home</NavLink>
                <NavLink className="nav__links__item" to={"/store"}>Store</NavLink>
                <NavLink className="nav__links__item" to={"/about"}>About</NavLink>
            </div>
            <button className="nav__cart"><img className="nav__cart__img" src={cart} alt="cart"/><div className="nav__cart__num">3</div></button>
        </div>
  )
}

export default Navbar