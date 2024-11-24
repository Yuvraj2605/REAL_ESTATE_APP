import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  //const { currentUser } = useContext(AuthContext);
  const currentUser = useSelector(state=>state.currentUser) 
  return (
    <nav>
      <div className="left">
        <Link to="/list" className="logoClass">
          <img src="./public/logo.png" />
          <span>Real Estate</span>
        </Link>
        <Link to="/">Home</Link>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "./public/noavatar.jpg"} alt="" />
            <span className="name">{currentUser.username}</span>
            <Link to="/profile" className="Link">
              <span className="Notification">4</span>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <a href="" className="signUp">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="./public/logo.png" alt="" onClick={() => setMenu(!menu)} />
        </div>

        <div className={menu ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <Link to="/login">Sign in</Link>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
