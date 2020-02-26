import React from "react"
import santamaria from "../assets/santamaria.jpg"

const Header = () => (
  <section className="header">
    <div className="header__container container-fluid">
      <div className="header__row row">
        <div className="header__left d-flex flex-column  justify-content-center">
          <div className="header__heading">Live your work dream</div>
          <div className="header__text">
            Our community of expert freelancers gives you the power to find the
            right person for any project in minutes
          </div>
          <div className="space-4"></div>
          <div className="header__form-wrapper">
            <input
              className="header__email"
              type="email"
              placeholder="Search for any skill"
              required
            ></input>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Find your expert&nbsp;<div className="header__glyph">&rarr;</div>
            </div>
          </div>
          <div className="header__subtext">
            Browse for free, no sign up required
          </div>
        </div>
        <img src={santamaria} className="header__image img-fluid" />
      </div>
    </div>
  </section>
)

export default Header
