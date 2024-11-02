import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import "./style.scss";
import { FaSmile } from "react-icons/fa";
import Authentication from "../../Authentication";
import { useContext } from "react";
import { globalContext } from "../../../store";
import { toast } from "react-toastify";
import { logoutUser } from "../../../store/helpers";



export default function Navbar() {
  const state = useContext(globalContext)
  const [authModal, setAuthModal] = useState(false)

    function closeModal(){
      setAuthModal(false)
    }
    function logUserOut () {
      logoutUser()
      state.dispatch({ type: "LOGOUT" })
      toast.success("You have successfully loged out!", {theme: "dark"})
    }

  return (
    <div className="nav-wrapper">
      <div className="logo">
        <h2>
          <Link to={"/"}>
            <Heading size={1.5}>Fonte</Heading>
          </Link>
        </h2>
      </div>
      <div className="menu">
        <div className="nav-links">
          <Link to={"/about"}>About</Link>
          <Link to={"/team"}>Team</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <div className="auth">
         { state.user.username?
         <div className="log-in-menu">
          <h3>{state.user.username}</h3>
          <div className="content">
          <button className="warning-btn" onClick={logUserOut} >Выйти</button>
          </div>
        </div>
          :
         <div className="log-out-menu">
            <button
              className="warning-btn"
              onClick={() => setAuthModal(!authModal)}
            >
             Войти
            </button>
            {authModal ? <Authentication closeModal={closeModal} /> : null}
          </div>}
          <Link to={"#"}>Russian</Link>
        </div>
      </div>
    </div>
  );
}
