import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import bbc from "../assets/bbc.jpg"
import insider from "../assets/insider.jpg"
import cnbc from "../assets/cnbc.jpg"
import ft from "../assets/ft.jpg"
import forbes from "../assets/forbes.jpg"
import indepen from "../assets/indepen.jpg"
import users from "../assets/users.png"
import user from "../assets/user.png"
import mobile from "../assets/mobile.png"
import mobileview from "../assets/mobile.png"
import cards from "../assets/cards.png"
import multicomments from "../assets/multicomments.png"
import reviews from "../assets/reviews.png"
import lock from "../assets/lock.jpg"
import camera from "../assets/camera.jpg"
import agent from "../assets/agent.jpg"
import shield from "../assets/shield.jpg"
import flogo from "../assets/flogo.jpg"
import Linkdin from "../assets/linkedin.svg"
import Facebook from "../assets/facebook.svg"
import Twitter from "../assets/twitter.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Hileets" />
    <Header />

    <section className="companies d-flex align-items-center">
      <div className="companies__container container">
        <div className="companies__row row">
          <div className="space-2"></div>
          <div className="companies__content d-flex flex-column justify-content-around col-12">
            <div className="space-2"></div>
            <div className="companies__heading">
              Trusted by thousands of businesses globally
            </div>
            <div className="space-2"></div>
            {/* <div className="companies__cards-wrapper">
              <div className="companies__card ">
                <div className="companies__number">935,994</div>
                <div className="companies__text">businesses</div>
                <div className="space-4"></div>
                <hr className="companies__line"></hr>
              </div>
              <div className="companies__card ">
                <div className="companies__number">2,399,459</div>
                <div className="companies__text">freelancers</div>
                <div className="space-4"></div>
                <hr className="companies__line"></hr>
              </div>
              <div className="companies__card ">
                <div className="companies__number">£130,572,105</div>
                <div className="companies__text">earned by freelancers</div>
                <div className="space-4"></div>
                <hr className="companies__line"></hr>
              </div>
            </div> */}
            <div className="space-2"></div>
            <div className="companies__subtext">Seen on:</div>
            <div className="space-1"></div>
            <div className="companies__logo-wrapper">
              <img className="companies__logo" src={bbc} />
              <img className="companies__logo" src={insider} />
              <img className="companies__logo" src={cnbc} />
              <img className="companies__logo" src={ft} />
              <img className="companies__logo" src={forbes} />
              <img className="companies__logo" src={indepen} />
            </div>
          </div>
          <div className="space-2"></div>
        </div>
      </div>
    </section>

    <section className="browse d-flex align-items-center">
      <div className="browse__container container">
        <div className="browse__row row">
          <div className="browse__left col-5">
            <h3>Discover Freelancers</h3>
            <h2>Hire in minutes</h2>
            <h2> Pay per hour</h2>
            <div className="space-1"></div>
            <p>
              PeoplePerHour connects your business to an international community
              of freelancers who want nothing more than to help your business
              succeed. Discover rated and reviewed experts for every skill
              imaginable — One discovery could change your business forever.
            </p>
            <div className="space-2"></div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Freelancers
            </div>
            <div className="space-2"></div>
            <h3>Popular Categories:</h3>
            <div className="browse__buttons-wrapper">
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                UI/UX Designers
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Mobile Websites...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Typography Vide...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Blockchain Deve...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Music Producers
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Editors
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Dutch Translators
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Employment Soli...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Linkdin Ads Ma...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Telesales Experts
              </div>
            </div>
          </div>
          <div className="browse__right col-5 container-fluid">
            {/* <img
              className="browse__image-users img-fluid "
              src={users}
              alt="users"
            />
            <img
              className="browse__image-user img-fluid "
              src={user}
              alt="user"
            /> */}
          </div>
          <div className="space-1"></div>
        </div>
      </div>
    </section>

    <section className="post d-flex align-items-center">
      <div className="post__container container">
        <div className="post__row row">
          <div className="space-4"></div>
          <div className="post__left col-6 container-fluid">
            <img
              className="post__image-mobile img-fluid"
              src={mobile}
              alt="mobile"
            />
          </div>
          <div className="post__right col-5">
            <h3>Let freelancers discover you</h3>
            <h2>Post projects quickly, receive responses even quicker.</h2>
            <div className="space-1"></div>
            <p>
              When you've got a project in mind, post it using our project
              writing tool. It's programmed to ask all the right questions to
              help you get your project ready for publishing. Our artificial
              intelligence system does the hard work — matching and contacting
              the best freelance talent for your project. Each freelancer then
              responds with their tailored proposal within minutes.
            </p>
            <div className="space-2"></div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Post a project
            </div>
          </div>
        </div>
        <div className="space-4"></div>
      </div>
    </section>

    <section className="offer d-flex align-items-center">
      <div className="offer__container container">
        <div className="offer__row row">
          <div className="space-4"></div>
          <div className="offer__left col-5">
            <h3>Explore Offers</h3>
            <h2 className="offer__heading">Discover fixed price offers.</h2>
            <div className="space-1"></div>
            <p className="offer__text">
              PeoplePerHour gives you a unique way to discover services to grow
              your business. Explore fixed-price offers from as little as £10 —
              Giving you the freedom to test ideas cost effectively. Once you're
              happy with the results, request a follow-on project.
            </p>
            <div className="space-2"></div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Offers
            </div>
            <div className="space-2"></div>
            <h3>Popular offer categories:</h3>
            <div className="browse__buttons-wrapper">
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Social Media Des...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                B2B Sales
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                3D Rendering
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Brochure Writing
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Inbound Sales
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Dutch Translation
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Ruby on Rails De...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Product Descript...
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                eBook Design
              </div>
              <div className="btn btn-second d-flex align-items-center justify-content-center">
                Payroll Services
              </div>
            </div>
          </div>
          <div className="offer__right col-7 container-fluid">
            <img className="offer__image-cards img-fluid" src={cards} />
          </div>
        </div>
        <div className="space-4"></div>
      </div>
    </section>

    <section className="trust d-flex align-items-center">
      <div className="trust__container container">
        <div className="trust__row row">
          <div className="space-4"></div>
          <div className="trust__left col-8 container-fluid">
            <img
              className="trust__image-comments img-fluid"
              src={multicomments}
            />
          </div>
          <div className="trust__right col-4">
            <h3>Trusted Experts</h3>
            <h2 className="trust__heading">
              Trust our experts to help grow your business.
            </h2>
            <div className="space-1"></div>
            <p className="trust__text">
              We carefully check everybody before allowing them onto our
              platform to guarantee you'll be working with an expert in their
              field of work. Above all, every freelancer is rated and reviewed
              by the PeoplePerHour community.
            </p>
            <div className="space-2"></div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Freelancers
            </div>
          </div>
        </div>
        <div className="space-4"></div>
      </div>
    </section>

    <section className="control d-flex align-items-center">
      <div className="control__container container">
        <div className="control__row row">
          <div className="space-4"></div>
          <div className="control__left col-5">
            <h3>Stay in control, keep in touch</h3>
            <h2>Collaborate with ease, and speed.</h2>
            <div className="space-1"></div>
            <p>
              PeoplePerHour gives you a clearly marked inbox of tasks,
              structured threads for communication and simple, organised
              invoicing.
            </p>
            <p>Make drowning in admin a thing of the past.</p>
          </div>
          <div className="control__right col-7 container-fluid">
            <img className="control__image-reviews img-fluid" src={reviews} />
          </div>
        </div>
        <div className="space-4"></div>
      </div>
    </section>

    <section className="funds d-flex align-items-center">
      <div className="funds__container d-flex flex-column align-items-center justify-content-around container">
        <div className="funds__row d-flex flex-column align-items-center row">
          <div className="space-4"></div>
          <div className="funds__content-one col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
            <div className="funds__image">
              <img className="funds__shield" src={shield} alt="shield" />
            </div>
            {/* <div className="space-1"></div> */}
            <div className="funds__heading-wrapper">
              <h3 className="funds__heading-three">Money Protection</h3>
              <h2 className="funds__heading">
                Your funds are always protected.
              </h2>
              <p className="funds__para">
                Outsource your tasks risk-free on PeoplePerHour and collaborate
                with freelancers from any country on the planet.
              </p>
              <p className="funds__para">
                If there's ever an issue, we'll help you fix it
              </p>
            </div>
          </div>
        </div>
        <div className="funds__row row">
          <div className="funds__content col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="funds__sub-image">
              <img className="funds__lock" src={lock} />
            </div>
            <div>
              <div className="funds__sub-heading">Painless and Risk-free</div>
              <div className="funds__text">
                Our intuitive payment system holds payments in an escrow account
                until work is considered complete by both parties.
              </div>
            </div>
          </div>
          <div className="funds__content col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="funds__sub-image">
              <img className="funds__camera" src={camera} />
            </div>
            <div>
              <div className="funds__sub-heading">Anti-Fraud Protection</div>
              <div className="funds__text">
                We have your back 24/7. We monitor every transaction and employ
                smart identification procedures to protect you from phishing,
                fraud and identity theft.
              </div>
            </div>
          </div>
          <div className="funds__content col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="funds__sub-image">
              <img className="funds__agent" src={agent} />
            </div>
            <div>
              <div className="funds__sub-heading">Here to help</div>
              <div className="funds__text">
                Whether you're experiencing technical or collaboration issues,
                our customer support specialists can help you solve them swiftly
                and promptly.
              </div>
            </div>
          </div>
        </div>
        <div className="funds__row row">
          <div className="space-4"></div>
          <div className="col-12">
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Join for free
            </div>
            <div className="funds__button-text">
              No upfront payments, no hidden fees.
            </div>
          </div>
          <div className="space-4"></div>
        </div>
      </div>
    </section>
    <section className="expert d-flex align-items-center">
      <div className="expert__container container">
        <div className="expert__row row">
          <div className="space-4"></div>
          <div className="expert__content d-flex flex-column align-items-center col-12">
            <h2 className="expert__heading">Find an expert for anything</h2>
            <div className="expert__text">
              Work with curated freelance talent from all over the world.
            </div>
            <div className="expert__text">
              Manage the entire project with PeoplePerHour.
            </div>
            <div className="expert__text">Pay securely with confidence.</div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Join for free
            </div>
            <div className="expert__button-text">
              No upfront payments, no hidden fees.
            </div>
          </div>
          <div className="space-4"></div>
        </div>
      </div>
    </section>
    <section className="footer d-flex align-items-center">
      <div className="footer__container container">
        <div className="footer__row row">
          <div className="space-4"></div>
          <div className="footer__content d-flex flex-column justify-content-around col-12">
            <div className="space-2"></div>
            <div className="footer__image d-flex flex-column align-items-start">
              <img className="footer__logo" src={flogo} />
            </div>
            <div className="space-2"></div>
            <div className="footer__sub-container">
              <div className="footer__menu">
                <div className="footer__heading">Product</div>
                <div className="footer__text">About</div>
                <div className="footer__text">Team</div>
                <div className="footer__text">Careers</div>
                <div className="footer__text">Blog</div>
              </div>
              <div className="footer__menu">
                <div className="footer__heading">Support</div>
                <div className="footer__text">How it works</div>
                <div className="footer__text">Trust & Safety</div>
                <div className="footer__text">Help Center</div>
              </div>
              <div className="footer__menu">
                <div className="footer__heading">Discover</div>
                <div className="footer__text">Premium Programme</div>
                <div className="footer__text">Academy</div>
              </div>
              <div className="footer__menu">
                <div className="footer__heading">Resources</div>
                <div className="footer__text">Customer Stories</div>
                <div className="footer__text">Business Cost Calculator</div>
                <div className="footer__text">Startup Cities</div>
              </div>
              <div className="footer__menu">
                <div className="footer__heading">Browse</div>
                <div className="footer__text">Freelance Services</div>
                <div className="footer__text">
                  Freelance Services By Country
                </div>
              </div>
            </div>
            <div className="space-2"></div>
            <div className="footer__icons-container">
              <a className="footer__icon">
                <Facebook />
              </a>
              <a className="footer__icon">
                <Linkdin />
              </a>
              <a className="footer__icon">
                <Twitter />
              </a>
            </div>
            <div className="space-2"></div>
            <div className="footer__terms-container">
              <div className="footer__item">Terms</div>
              <div className="footer__item">Privacy</div>
              <div className="footer__copy">
                &copy; 2020 People Per Hour Ltd
              </div>
            </div>
          </div>
          <div className="space-1"></div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
