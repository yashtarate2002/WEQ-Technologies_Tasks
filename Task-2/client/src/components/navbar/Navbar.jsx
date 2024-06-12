import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from Redux
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toggleShowCart } from '../../redux/cartSlice';
import { login } from "../../redux/authSlice";
import logo from '../../assets/logo.svg';
import classes from "./navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showCart, products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(login());
    navigate('/login');
  }

  const handleCloseCart = () => {
    if (showCart) {
      dispatch(toggleShowCart());
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to={"/"} onClick={handleCloseCart} className={classes.left}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={`${classes.navContainer} ${menuOpen ? classes.show : ''}`}>
          <ul className={classes.navList}>
            <li><Link to="/" className={classes.navLink}>Home</Link></li>
            <li><Link to="/category/men's"  className={classes.navLink}>Men's</Link></li>
            <li><Link to="/category/womens" className={classes.navLink}>Women's</Link></li>
            <li><Link to="/category/jewelery"  className={classes.navLink}>Jewelery</Link></li>
            <li><Link to="/category/electronics"  className={classes.navLink}>Electronics</Link></li>
          </ul>
        </div>
        <div className={classes.right}>
          <div className={classes.cartContainer} onClick={() => dispatch(toggleShowCart())}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <span className={classes.cartNumber}>{products?.length}</span>
          </div>
        </div>
        {showCart }
        <span onClick={handleLogout} className={classes.logoutBtn}>Logout</span>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
