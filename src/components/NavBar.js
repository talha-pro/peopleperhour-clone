import React from "react"
import logo from "../assets/logo.jpg"

const NavBar = () => (
  <nav className="navigation d-flex align-items-center">
    <div className="navigation__container container-fluid">
      <div className="navigation__row d-flex align-items-center justify-content-between">
        <div className="col-4">
          <img className="navigation__logo " src={logo} alt="logo"></img>
        </div>

        <div className="navigation__buttons">
          <div className="btn btn-default post-button">Post Project</div>
          <div className="btn btn-default search">Search</div>
          <div className="btn btn-default how">How It Works</div>
          <div className="btn btn-default login">Log In</div>
          <div className="btn btn-default signup">Sign Up</div>
          <div className="btn btn-default freelancer">Freelancer?</div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
