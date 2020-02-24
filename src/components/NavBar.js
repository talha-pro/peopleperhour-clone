import React from "react"

const NavBar = () => (
  <nav className="navigation d-flex align-items-center">
    <div className="navigation__container container-fluid">
      <div className="navigation__row d-flex align-items-center justify-content-between">
        <div className="navigation__logo">Logo</div>
        <div className="navigation__buttons">
          <div>Post Project</div>
          <div>Search</div>
          <div>How It Works</div>
          <div>Log In</div>
          <div>Sign Up</div>
          <div>Freelancer?</div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
